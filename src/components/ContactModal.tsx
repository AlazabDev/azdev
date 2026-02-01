import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Send, Loader2, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface ContactModalProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
}

const ContactModal = ({ trigger, title = "احجز استشارة مجانية", description = "املأ النموذج وسنتواصل معك خلال 24 ساعة" }: ContactModalProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'consultation',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message
        }
      });

      if (error) {
        throw new Error(error.message || 'فشل في إرسال البيانات');
      }
      
      toast({
        title: "تم حجز الاستشارة بنجاح! 🎉",
        description: "سنتواصل معك خلال 24 ساعة لتحديد موعد الاستشارة",
      });
      
      // إعادة تعيين النموذج وإغلاق المودال
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setOpen(false);
    } catch (error) {
      // Silent error handling - show user-friendly message only
      toast({
        title: "فشل في الحجز",
        description: "حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Calendar className="w-6 h-6 text-primary ml-3" />
            {title}
          </DialogTitle>
          <p className="text-muted-foreground">{description}</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">الاسم الكامل *</label>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">البريد الإلكتروني *</label>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@company.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
              <Input 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+966 50 123 4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">اسم الشركة</label>
              <Input 
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="اسم شركتك أو مؤسستك"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">وصف احتياجاتك *</label>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="اشرح لنا ما تحتاجه من الاستشارة..."
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 ml-2" />
              مدة الاستشارة: 45 دقيقة | مجانية تماماً | عبر الإنترنت أو في المكتب
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                  جاري الحجز...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 ml-2" />
                  حجز الاستشارة
                </>
              )}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              إلغاء
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;