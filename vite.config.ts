import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig(() => {
    return {
        plugins: [reactRouter(), tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            },
        },
        server: {
            // HMR is disabled in AI Studio via DISABLE_HMR env var.
            // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
            hmr: process.env.DISABLE_HMR !== 'true',
            // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
            watch: process.env.DISABLE_HMR === 'true' ? null : {},
        },
    };
});
