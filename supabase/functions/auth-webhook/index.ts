import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    const { type, table, record, old_record } = payload;

    console.log(`Auth webhook received: type=${type}, table=${table}`);

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase environment variables");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Handle different auth events
    switch (type) {
      case "INSERT": {
        // New user registered
        if (table === "users") {
          console.log(`New user registered: ${record.email}`);
          
          // Send welcome email via Resend
          const resendApiKey = Deno.env.get("RESEND_API_KEY");
          if (resendApiKey && record.email) {
            await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendApiKey}`,
              },
              body: JSON.stringify({
                from: "alazab.dev <onboarding@resend.dev>",
                to: [record.email],
                subject: "مرحباً بك في alazab.dev",
                html: `
                  <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                      <h1 style="margin: 0;">مرحباً بك في alazab.dev</h1>
                    </div>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px;">
                      <p>شكراً لتسجيلك معنا! نحن سعداء بانضمامك.</p>
                      <p>يمكنك الآن الاستفادة من جميع خدماتنا.</p>
                      <p style="margin-top: 20px;"><strong>فريق alazab.dev</strong></p>
                    </div>
                  </div>
                `,
              }),
            });
            console.log("Welcome email sent");
          }
        }
        break;
      }

      case "UPDATE": {
        if (table === "users") {
          console.log(`User updated: ${record.email}`);
        }
        break;
      }

      case "DELETE": {
        if (table === "users") {
          console.log(`User deleted: ${old_record?.email}`);
        }
        break;
      }

      default:
        console.log(`Unhandled webhook type: ${type}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Auth webhook error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
