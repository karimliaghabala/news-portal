import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // bütün şəbəkədən girişə icazə
    port: 5173, // default port (istəsən dəyişə bilərsən)
  },
});
