import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';
  
  return {
    server: {
      host: "::",
      port: 8080,
      strictPort: true,
      watch: {
        usePolling: true,
      },
    },
    
    plugins: [
      react({
        // تحسينات SWC
        swcOptions: {
          jsc: {
            transform: {
              react: {
                runtime: 'automatic',
                development: isDevelopment,
                refresh: isDevelopment,
              },
            },
          },
        },
      }),
      
      isDevelopment && componentTagger(),
      
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon002.png', 'alazab-icon.png', 'robots.txt'],
        manifest: {
          name: 'alazab.dev - Advanced Tech Solutions',
          short_name: 'alazab.dev',
          description: 'IT team providing innovative technical solutions for construction and architectural projects',
          theme_color: '#7c3aed',
          background_color: '#0a0a0f',
          display: 'standalone',
          orientation: 'portrait-primary',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: '/alazab-icon.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: '/alazab-icon.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,woff,ttf}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // سنة واحدة
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // سنة واحدة
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'unsplash-images-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // 30 يوم
                }
              }
            }
          ],
          // تحسينات Workbox
          skipWaiting: true,
          clientsClaim: true,
          cleanupOutdatedCaches: true,
        }
      }),
      
      // إضافة محلل الحجم في وضع التطوير فقط
      isDevelopment && visualizer({
        filename: 'dist/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ].filter(Boolean),
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~": path.resolve(__dirname, "./src"),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    
    build: {
      // زيادة حد التحذير إلى 1200 كيلوبايت
      chunkSizeWarningLimit: 1200,
      
      // تحسينات البناء
      target: 'es2020',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: isDevelopment,
      
      // تقليل حجم الملفات
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure_funcs: isProduction ? ['console.log', 'console.info', 'console.debug'] : [],
        },
        format: {
          comments: false,
        },
      },
      
      // تقسيم الحزم بشكل ذكي
      rollupOptions: {
        output: {
          // استراتيجية تقسيم الحزم المحسنة
          manualChunks: (id) => {
            // مكتبات React الأساسية
            if (id.includes('node_modules/react/') || 
                id.includes('node_modules/react-dom/') || 
                id.includes('node_modules/react-router-dom/')) {
              return 'vendor-core';
            }
            
            // مكتبات Radix UI
            if (id.includes('node_modules/@radix-ui/')) {
              // تجميع كل مكتبات Radux UI في حزمة واحدة
              return 'vendor-radix';
            }
            
            // Supabase
            if (id.includes('node_modules/@supabase/')) {
              return 'vendor-supabase';
            }
            
            // TanStack Query
            if (id.includes('node_modules/@tanstack/')) {
              return 'vendor-tanstack';
            }
            
            // مكتبات النماذج
            if (id.includes('node_modules/react-hook-form') || 
                id.includes('node_modules/@hookform') || 
                id.includes('node_modules/zod')) {
              return 'vendor-forms';
            }
            
            // مكتبات Recharts
            if (id.includes('node_modules/recharts') || 
                id.includes('node_modules/d3-')) {
              return 'vendor-charts';
            }
            
            // مكتبات CSS والتصميم
            if (id.includes('node_modules/tailwindcss') || 
                id.includes('node_modules/class-variance-authority') || 
                id.includes('node_modules/clsx') || 
                id.includes('node_modules/tailwind-merge')) {
              return 'vendor-styling';
            }
            
            // أي مكتبات أخرى كبيرة
            if (id.includes('node_modules') && id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            
            // المكتبات المتبقية
            if (id.includes('node_modules')) {
              return 'vendor-other';
            }
          },
          
          // تحسين أسماء الملفات
          entryFileNames: isProduction ? 'assets/[name].[hash].js' : 'assets/[name].js',
          chunkFileNames: isProduction ? 'assets/[name].[hash].js' : 'assets/[name].js',
          assetFileNames: isProduction ? 'assets/[name].[hash].[ext]' : 'assets/[name].[ext]',
        },
      },
      
      // تقارير الحجم
      reportCompressedSize: true,
    },
    
    // تحسينات للتطوير
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react-router-dom',
        '@supabase/supabase-js',
        '@tanstack/react-query',
        'react-hook-form',
        'zod',
        'lucide-react',
        'recharts',
        'date-fns',
      ],
      exclude: ['@vitejs/plugin-react-swc'],
    },
    
    // تحسينات الأداء
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
      treeShaking: true,
    },
    
    // إعدادات التطوير
    preview: {
      port: 3000,
      strictPort: true,
      host: true,
    },
  };
});
