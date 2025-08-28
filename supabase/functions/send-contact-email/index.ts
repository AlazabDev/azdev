import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    // Send notification to company
    const companyEmailResponse = await resend.emails.send({
      from: "Al-Azab Tech <noreply@alazab.com>",
      to: ["tech@alazab.com"],
      subject: type === 'consultation' ? `طلب استشارة جديد من ${name}` : `استفسار جديد من ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
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
    });

    // Send confirmation to client
    const clientEmailResponse = await resend.emails.send({
      from: "Al-Azab Tech <noreply@alazab.com>",
      to: [email],
      subject: type === 'consultation' ? "تأكيد حجز الاستشارة - شركة العزب" : "تأكيد استلام رسالتك - شركة العزب",
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">شركة العزب للتكنولوجيا</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">الحلول التقنية المتطورة</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #333; margin-top: 0;">مرحباً ${name}، 👋</h2>
              
              ${type === 'consultation' ? `
                <p>شكراً لك على حجز استشارة مجانية مع فريقنا التقني!</p>
                <p>لقد استلمنا طلبك وسيقوم أحد أعضاء فريقنا المتخصص بالتواصل معك خلال <strong>24 ساعة</strong> لتحديد موعد الاستشارة.</p>
                
                <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #2e7d2e; margin-top: 0;">ما يمكنك توقعه:</h3>
                  <ul style="color: #2e7d2e; margin: 0; padding-right: 20px;">
                    <li>مدة الاستشارة: 45 دقيقة</li>
                    <li>مجانية بالكامل</li>
                    <li>تحليل شامل لاحتياجاتك التقنية</li>
                    <li>خطة عمل مبدئية</li>
                  </ul>
                </div>
              ` : `
                <p>شكراً لك على تواصلك معنا!</p>
                <p>لقد استلمنا استفسارك وسيقوم فريقنا التقني بمراجعته والرد عليك خلال <strong>24 ساعة كحد أقصى</strong>.</p>
              `}
              
              <p>في حالة الحاجة للتواصل السريع، يمكنك الاتصال بنا على:</p>
              <p><strong>📞 +966 11 234 5678</strong></p>
              <p><strong>✉️ tech@alazab.com</strong></p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0;">نبذة عن خدماتنا</h3>
              <ul style="line-height: 1.8; padding-right: 20px;">
                <li>تطوير التطبيقات الويب والجوال</li>
                <li>أنظمة إدارة المشاريع الإنشائية</li>
                <li>حلول الذكاء الاصطناعي</li>
                <li>تحليل البيانات والتقارير</li>
                <li>الأمن السيبراني</li>
              </ul>
            </div>
            
            <div style="text-align: center; padding: 20px; background: #fff; border-radius: 8px;">
              <p style="margin: 0; color: #666;">نتطلع للعمل معك وتحقيق رؤيتك التكنولوجية</p>
              <p style="margin: 10px 0 0 0; font-weight: bold; color: #333;">فريق العزب للتكنولوجيا</p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { companyEmailResponse, clientEmailResponse });

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