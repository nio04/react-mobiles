import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/index.jsx',
            refresh: true,
        }),
        react(),
        eslint(),
    ],
});
