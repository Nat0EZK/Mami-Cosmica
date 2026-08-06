/**
 * Copia img/ y videos/ de la raíz del proyecto a app/public/.
 *
 * Esas copias están en .gitignore: el vídeo pesa 28 MB y duplicarlo dejaría
 * ~56 MB permanentes en el historial de git. Se regeneran antes de cada
 * `dev` y cada `build`, así que la raíz es la única fuente de verdad.
 */
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const appRoot = resolve(here, "..");
const projectRoot = resolve(appRoot, "..");

for (const folder of ["img", "videos"]) {
    const from = resolve(projectRoot, folder);
    const to = resolve(appRoot, "public", folder);

    if (!existsSync(from)) {
        console.warn(`sync-assets: falta ${folder}/ en la raíz, se omite`);
        continue;
    }

    mkdirSync(to, { recursive: true });
    cpSync(from, to, { recursive: true });
    console.log(`sync-assets: ${folder}/ → app/public/${folder}/`);
}
