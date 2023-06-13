import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        port: 5173, // Ganti dengan port yang diinginkan
        host: "localhost", // Ganti dengan host yang diinginkan
    },
    plugins: [
        laravel({
            input: [
                "resources/js/app.tsx",
                "node_modules/flowbite/dist/flowbite.js",
                "node_modules/flowbite/dist/datepicker.js",
            ],
            ssr: "resources/js/ssr.tsx",
            refresh: true,
        }),
        react(),
    ],
});
