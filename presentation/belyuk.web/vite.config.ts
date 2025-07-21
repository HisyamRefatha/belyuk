import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(), tailwindcss()],
    server: {
        port: 55445,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
        },
    },
})
