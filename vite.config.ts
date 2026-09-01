// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // O destino é hospedagem compartilhada (cPanel/Apache), que serve arquivos
  // estáticos e PHP — não roda o servidor Nitro. Fixamos node-server para que
  // scripts/prerender.mjs consiga levantar o build e salvar o HTML pronto.
  // (O prerender nativo do TanStack não funciona aqui: ele procura o bundle em
  // dist/server/server.js, enquanto esta config faz o Nitro gerar .output/.)
  nitro: { preset: "node-server" },

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
