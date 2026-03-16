import { defineConfig } from 'vite'
import { copyFileSync } from 'fs'
import { join } from 'path'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,ttf,json}'],
        globIgnores: ['**/vendor-*.js', '**/index-*.js'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/, /^\/auth/],
        runtimeCaching: [
          {
            urlPattern: /\.html$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-pages',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 86400
              }
            }
          },
          {
            urlPattern: /\.(?:css|js)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets',
              expiration: {
                maxEntries: 1000,
                maxAgeSeconds: 31536000
              }
            }
          },
          {
            urlPattern: /\.json$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'json-data',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 86400
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 1000,
                maxAgeSeconds: 31536000
              }
            }
          },
          {
            urlPattern: /\.(?:ttf|woff|woff2)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts',
              expiration: {
                maxEntries: 1000,
                maxAgeSeconds: 31536000
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: false,
      },
    }),
    {
      name: 'copy-404-for-github-pages',
      closeBundle() {
        const outDir = join(process.cwd(), 'dist')
        copyFileSync(join(outDir, 'index.html'), join(outDir, '404.html'))
      },
    },
    {
      name: 'redirect-root-to-base',
      enforce: 'pre',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0] || '';
          if (url === '/' || url === '' || url === '/barcode-scanner') {
            res.statusCode = 302;
            res.setHeader('Location', '/barcode-scanner/');
            res.end();
          } else {
            next();
          }
        });
      },
    },
  ],
  base: '/barcode-scanner/',
  server: {
    open: '/barcode-scanner/',
  },
})
