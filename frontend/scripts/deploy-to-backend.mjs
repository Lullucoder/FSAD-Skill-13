import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendRoot = path.resolve(__dirname, "..");
const distDir = path.join(frontendRoot, "dist");
const backendStaticDir = path.resolve(
  frontendRoot,
  "..",
  "backend",
  "src",
  "main",
  "resources",
  "static"
);

if (!existsSync(distDir)) {
  throw new Error("Build output not found. Run npm run build first.");
}

rmSync(backendStaticDir, { recursive: true, force: true });
mkdirSync(backendStaticDir, { recursive: true });
cpSync(distDir, backendStaticDir, { recursive: true });

console.log("Frontend deployed to Spring Boot static resources.");
