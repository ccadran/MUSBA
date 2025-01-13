import * as fs from "fs";
import { join, resolve } from "path";
import { defineConfig } from "vite";


// Définir les répertoires
const root = resolve(__dirname, "src");

const outDir = resolve(__dirname, "dist");


const redirectToDir = ({ root }) => ({
  name: "redirect-to-dir",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const filePath = join(root, req.url);

      fs.stat(filePath, (err, stats) => {
        if (!err && stats.isDirectory() && !req.url.endsWith("/")) {
          res.statusCode = 301;
          res.setHeader("Location", req.url + "/");
          res.setHeader("Content-Length", "0");
          res.end();
          return;
        }

        next();
      });
    });
  },
});

export default defineConfig({
  root,
  publicDir: "../static/",
  plugins: [redirectToDir({ root })],
  base: "./", 
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: true, 


    rollupOptions: {
      input: {

        "root": "./src/index.html",

        //Pour ajouter un sous dossier ajouter un "/le nom de la page" après la route de base
        "1-hub": "./src/experiences/1-hub/index.html",
        // "2-arts-reserve": "./src/experiences/2-arts-reserve/index.html",
        // "3-techniques": "./src/experiences/3-techniques/index.html",
        // "4-sculpture": "./src/experiences/4-sculpture/index.html",
        // "5-peintures": "./src/experiences/5-peintures/index.html",
        // "6-restaurations": "./src/experiences/6-restaurations/index.html",

      },
    },
  },
});
