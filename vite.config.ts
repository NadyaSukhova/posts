import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/posts",
  plugins: [vue()],
  build: {
    target: "esnext",
  },
  resolve: { alias: { vue: "vue/dist/vue.esm-bundler" } },
});
