/**
 * Pré-renderiza o site para hospedagem estática (cPanel/Apache).
 *
 * O build do Vite gera um servidor SSR em .output/server/index.mjs e os assets
 * em .output/public/ — mas nenhum index.html. Hospedagem compartilhada não roda
 * Node, então aqui levantamos o servidor, pedimos a página e gravamos o HTML
 * pronto em .output/public/index.html.
 *
 * Não usamos o prerender nativo do TanStack Start porque ele procura o bundle
 * em dist/server/server.js, caminho que não bate com a saída do Nitro nesta
 * configuração (o mesmo motivo pelo qual `vite preview` falha).
 *
 * Uso: node scripts/prerender.mjs   (depois de `vite build`)
 */
import { spawn } from "node:child_process";
import { writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const SERVER_ENTRY = join(".output", "server", "index.mjs");
const OUT_DIR = join(".output", "public");
const PORT = Number(process.env.PRERENDER_PORT ?? 3123);
const ORIGIN = `http://127.0.0.1:${PORT}`;
const BOOT_TIMEOUT_MS = 60_000;

/** Rotas a gravar como HTML estático: [caminho pedido, arquivo de saída]. */
const ROUTES = [["/", "index.html"]];

async function waitForServer(signal) {
  const deadline = Date.now() + BOOT_TIMEOUT_MS;
  while (Date.now() < deadline) {
    if (signal.aborted) throw new Error("servidor encerrou antes de responder");
    try {
      const res = await fetch(ORIGIN, { signal: AbortSignal.timeout(2000) });
      if (res.status < 500) return;
    } catch {
      // ainda subindo
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`servidor não respondeu em ${BOOT_TIMEOUT_MS / 1000}s`);
}

async function main() {
  try {
    await access(SERVER_ENTRY);
  } catch {
    throw new Error(`${SERVER_ENTRY} não existe — rode o build antes.`);
  }

  const controller = new AbortController();
  const server = spawn(process.execPath, [SERVER_ENTRY], {
    env: { ...process.env, PORT: String(PORT), HOST: "127.0.0.1" },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let serverLog = "";
  server.stdout.on("data", (d) => (serverLog += d));
  server.stderr.on("data", (d) => (serverLog += d));
  server.on("exit", (code) => {
    if (code !== 0 && code !== null) controller.abort();
  });

  try {
    await waitForServer(controller.signal);

    for (const [path, file] of ROUTES) {
      const res = await fetch(`${ORIGIN}${path}`, {
        headers: { "user-agent": "prerender" },
      });
      const html = await res.text();

      if (!res.ok) {
        throw new Error(`${path} respondeu ${res.status}\n${html.slice(0, 800)}`);
      }
      // Um 200 com a página de erro do SSR passaria batido sem esta checagem.
      if (!html.includes("</html>") || html.length < 2000) {
        throw new Error(`${path} devolveu HTML suspeito (${html.length} bytes)`);
      }

      const dest = join(OUT_DIR, file);
      await writeFile(dest, html, "utf8");
      console.log(`  ✓ ${path} → ${dest} (${(html.length / 1024).toFixed(1)} KB)`);
    }
  } catch (error) {
    if (serverLog.trim()) console.error("\n--- log do servidor ---\n" + serverLog);
    throw error;
  } finally {
    server.kill();
  }
}

main().catch((error) => {
  console.error(`\n✗ prerender falhou: ${error.message}`);
  process.exit(1);
});
