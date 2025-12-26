import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type: 'consultation' | 'inquiry';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  projectType?: string;
  budget?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, name, email, phone, company, message, projectType, budget }: ContactEmailRequest = await req.json();

    console.log("Processing contact email:", { type, name, email });

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ 
          success: true,
          message: "تم استلام رسالتك - Email service not configured"
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification to company using fetch
    const companyEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "alazab.dev <onboarding@resend.dev>",
        to: ["info@alazab.dev"],
        subject: type === 'consultation' ? `طلب استشارة جديد من ${name}` : `استفسار جديد من ${name}`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0;">${type === 'consultation' ? 'طلب استشارة جديد' : 'استفسار جديد'}</h1>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #333; margin-top: 0;">تفاصيل المرسل</h2>
                <p><strong>الاسم:</strong> ${name}</p>
                <p><strong>البريد الإلكتروني:</strong> ${email}</p>
                ${phone ? `<p><strong>الهاتف:</strong> ${phone}</p>` : ''}
                ${company ? `<p><strong>الشركة:</strong> ${company}</p>` : ''}
                ${projectType ? `<p><strong>نوع المشروع:</strong> ${getProjectTypeLabel(projectType)}</p>` : ''}
                ${budget ? `<p><strong>الميزانية:</strong> ${getBudgetLabel(budget)}</p>` : ''}
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px;">
                <h2 style="color: #333; margin-top: 0;">الرسالة</h2>
                <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
              
              <div style="text-align: center; margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
                <p style="margin: 0; color: #1565c0;">تم الإرسال بتاريخ: ${new Date().toLocaleString('ar-SA')}</p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    const companyResult = await companyEmailResponse.json();
    console.log("Company email result:", companyResult);

    // Send confirmation to client
    const clientEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "alazab.dev <onboarding@resend.dev>",
        to: [email],
        subject: type === 'consultation' ? "تأكيد حجز الاستشارة - alazab.dev" : "تأكيد استلام رسالتك - alazab.dev",
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0;">alazab.dev</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">حلول تقنية متطورة</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #333; margin-top: 0;">مرحباً ${name}، 👋</h2>
                
                ${type === 'consultation' ? `
                  <p>شكراً لك على حجز استشارة مجانية مع فريقنا التقني!</p>
                  <p>سيقوم أحد أعضاء فريقنا بالتواصل معك خلال <strong>24 ساعة</strong>.</p>
                  
                  <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #2e7d2e; margin-top: 0;">ما يمكنك توقعه:</h3>
                    <ul style="color: #2e7d2e; margin: 0; padding-right: 20px;">
                      <li>استشارة مجانية 45 دقيقة</li>
                      <li>تحليل احتياجاتك التقنية</li>
                      <li>خطة عمل مبدئية</li>
                    </ul>
                  </div>
                ` : `
                  <p>شكراً لتواصلك معنا!</p>
                  <p>سنرد على استفسارك خلال <strong>24 ساعة</strong>.</p>
                `}
                
                <p>للتواصل السريع:</p>
                <p><strong>📞 +966 11 234 5678</strong></p>
                <p><strong>✉️ info@alazab.dev</strong></p>
              </div>
              
              <div style="text-align: center; padding: 20px; background: #fff; border-radius: 8px;">
                <p style="margin: 0; font-weight: bold; color: #7c3aed;">فريق alazab.dev</p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    const clientResult = await clientEmailResponse.json();
    console.log("Client email result:", clientResult);

    return new Response(JSON.stringify({ 
      success: true,
      message: "تم إرسال الرسائل بنجاح"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        message: "فشل في إرسال الرسائل"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

function getProjectTypeLabel(type: string): string {
  const labels: { [key: string]: string } = {
    'web': 'تطوير تطبيق ويب',
    'mobile': 'تطوير تطبيق جوال',
    'system': 'تطوير نظام إدارة',
    'ai': 'حلول الذكاء الاصطناعي',
    'data': 'تحليل البيانات',
    'security': 'الأمن السيبراني',
    'other': 'أخرى'
  };
  return labels[type] || type;
}

function getBudgetLabel(budget: string): string {
  const labels: { [key: string]: string } = {
    'small': 'أقل من 50,000 ريال',
    'medium': '50,000 - 150,000 ريال',
    'large': '150,000 - 500,000 ريال',
    'enterprise': 'أكثر من 500,000 ريال'
  };
  return labels[budget] || budget;
}

serve(handler);
