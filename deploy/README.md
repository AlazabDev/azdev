# نشر الانتاج — alazab.dev

دليل النشر الفعلي على السيرفر الذاتي.

| العنصر | القيمة |
|---|---|
| دومين الانتاج | `https://alazab.dev` |
| IP السيرفر | `3.76.123.170` |
| بيئة التطوير | `https://azdev.lovable.app` |
| Supabase | `bxuhcbfdoaflsgbxiqei` (مشتركة بين البيئتين) |

## 1) DNS (مرة واحدة)

عند مسجل الدومين، أضِف:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `3.76.123.170` | 3600 |
| A | `www` | `3.76.123.170` | 3600 |
| CAA | `@` | `0 issue "letsencrypt.org"` | 3600 |

تحقق: `dig +short alazab.dev` يجب أن يُرجع `3.76.123.170`.

## 2) إعداد السيرفر (مرة واحدة)

```bash
# على السيرفر
sudo apt update && sudo apt install -y nginx git curl certbot python3-certbot-nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

sudo mkdir -p /var/www/alazab.dev/{repo,releases}
sudo chown -R $USER:$USER /var/www/alazab.dev

git clone <REPO_URL> /var/www/alazab.dev/repo
cd /var/www/alazab.dev/repo
cp .env.example .env   # لو موجود، أو أنشئ .env بمتغيرات VITE_SUPABASE_*
```

### Nginx + SSL

```bash
sudo cp deploy/nginx/alazab.dev.conf /etc/nginx/sites-available/alazab.dev
sudo ln -s /etc/nginx/sites-available/alazab.dev /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

sudo certbot --nginx -d alazab.dev -d www.alazab.dev --redirect
```

## 3) أول نشر

```bash
cd /var/www/alazab.dev/repo
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```

## 4) تحديثات لاحقة

```
[Lovable] → معاينة على azdev.lovable.app → push to main → على السيرفر: ./deploy/deploy.sh
```

سكربت `deploy.sh` يقوم بـ: git pull → `npm ci` → `npm run build` → نسخ `dist/` لمجلد release جديد → تحديث symlink → reload Nginx → الاحتفاظ بآخر 5 إصدارات للـ rollback.

### Rollback سريع

```bash
ls /var/www/alazab.dev/releases/
sudo ln -sfn /var/www/alazab.dev/releases/<TIMESTAMP> /var/www/alazab.dev/current
sudo systemctl reload nginx
```

## 5) Supabase (إعدادات مرة واحدة)

في لوحة Supabase → Authentication → URL Configuration:

- **Site URL**: `https://alazab.dev`
- **Redirect URLs**:
  - `https://alazab.dev/**`
  - `https://www.alazab.dev/**`
  - `https://azdev.lovable.app/**`
  - `http://localhost:8080/**`

Google OAuth Console → Authorized redirect URIs:
- `https://bxuhcbfdoaflsgbxiqei.supabase.co/auth/v1/callback`
- `https://alazab.dev/auth/callback`
- `https://azdev.lovable.app/auth/callback`

## 6) ما بعد النشر

- Google Search Console → التحقق من ملكية `alazab.dev` (ملف `google722bc387c001dc7c.html` موجود بالفعل في `public/`) ثم إرسال `https://alazab.dev/sitemap.xml`.
- اختبار: `curl -I https://alazab.dev` ⇒ `200 OK` + `strict-transport-security`.
- Lighthouse: تأكد من بقاء النتيجة ≥ 99 على Performance.
- PWA: تأكد من تحميل `/manifest.webmanifest` بـ Content-Type صحيح.

## التحقق السريع

```bash
curl -I https://alazab.dev
curl -I https://www.alazab.dev          # يجب أن يُعيد توجيه 301
curl https://alazab.dev/robots.txt
curl https://alazab.dev/sitemap.xml | head
```
