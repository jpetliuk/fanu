import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss()],
   // base: "/fanu/",
   build: {
      // 8192 bytes = 8 KiB. This tells Vite to inline assets smaller than this size.
      // Since your CSS is 4.6 KiB, this will solve the render-blocking issue.
      assetsInlineLimit: 8192, 
   },
});
