import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "@farmfe/core";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import imagemin from "unplugin-imagemin/vite";

export default defineConfig({
  vitePlugins: [vue(), vueJsx(), imagemin({})],
  compilation: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
