import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Task Manager',
        short_name: 'Todo',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        lang: 'en',
        scope: '/',
        description:
          'Task Manager, A simple WebApp that lets you list down all your tasks and mark the completed tasks. Simple and Awesome UI Task Manager.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: 'favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: 'mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png',
          },
          {
            src: 'safari-pinned-tab.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: 'favicon.ico',
            sizes: 'any',
            type: 'image/x-icon',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,webmanifest,ico}'],
      },
    }),
  ],
});
