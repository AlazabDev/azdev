import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req: Request) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // WhatsApp webhook verification (GET request)
  if (req.method === "GET") {
    const url = new URL(req.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");

    const verifyToken = Deno.env.get("WHATSAPP_VERIFY_TOKEN") || "alazab_dev_webhook_verify";

    if (mode === "subscribe" && token === verifyToken) {
      console.log("WhatsApp webhook verified successfully");
      return new Response(challenge, { status: 200 });
    }

    return new Response("Forbidden", { status: 403 });
  }

  // Handle incoming webhook events (POST)
  try {
    const FACEBOOK_APP_SECRET = Deno.env.get("FACEBOOK_APP_SECRET");
    const WHATSAPP_ACCESS_TOKEN = Deno.env.get("WHATSAPP_ACCESS_TOKEN");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase environment variables");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const body = await req.json();

    console.log("WhatsApp webhook received:", JSON.stringify(body).substring(0, 500));

    // Process webhook entries
    if (body.object === "whatsapp_business_account") {
      for (const entry of body.entry || []) {
        for (const change of entry.changes || []) {
          const value = change.value;

          // Handle incoming messages
          if (value.messages) {
            for (const message of value.messages) {
              const contact = value.contacts?.[0];
              
              console.log(`Incoming message from ${message.from}: ${message.type}`);

              // Store message in database
              const { error: insertError } = await supabase
                .from("whatsapp_messages")
                .insert({
                  phone_number: message.from,
                  content: message.text?.body || message.caption || null,
                  message_type: message.type,
                  direction: "incoming",
                  wa_message_id: message.id,
                  customer_name: contact?.profile?.name || null,
                  status: "received",
                  media_url: message.image?.id || message.document?.id || message.audio?.id || message.video?.id || null,
                  media_mime_type: message.image?.mime_type || message.document?.mime_type || message.audio?.mime_type || message.video?.mime_type || null,
                });

              if (insertError) {
                console.error("Error storing message:", insertError);
              }
            }
          }

          // Handle message status updates
          if (value.statuses) {
            for (const status of value.statuses) {
              console.log(`Message status update: ${status.id} -> ${status.status}`);

              const { error: updateError } = await supabase
                .from("whatsapp_messages")
                .update({ status: status.status })
                .eq("wa_message_id", status.id);

              if (updateError) {
                console.error("Error updating message status:", updateError);
              }
            }
          }
        }
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("WhatsApp webhook error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
