import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/cv-roberto-leonarduzzi/",

  // ✅ Configurazione per migliorare il file watching
  server: {
    watch: {
      usePolling: true, // Forza il controllo dei file ogni 100ms
      interval: 100, // Intervallo di polling
      ignored: ["!**/src/data/**"], // Assicurati che i file data vengano monitorati
    },
    hmr: {
      overlay: true, // Mostra errori come overlay
      port: 5174, // Porta diversa per HMR se necessario
    },
  },

  // ✅ Ottimizzazione per forzare reload dei progetti
  optimizeDeps: {
    exclude: ["./src/data/projects", "./src/data/portfolioProjects.ts"],
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
