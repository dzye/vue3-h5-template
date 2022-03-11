import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: '@nutui/nutui',
            libraryNameChangeCase: 'pascalCase',
            resolveStyle: (name) => {
              return `@nutui/nutui/dist/packages/${name.toLowerCase()}/index.scss`;
            },
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@api': path.resolve(__dirname, 'src/api'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // example : additionalData: `@import "./src/design/styles/variables";`
          // dont need include file extend .scss
          additionalData: `@import "@nutui/nutui/dist/styles/variables.scss"; @import "./src/assets/custom_theme.scss";`,
        },
      },
    },
    server: {
      port: Number(env.VITE_PORT),
      // 是否开启 https
      https: false,
      // proxy: {
      //   '/api': {
      //     target: 'http://api网关所在域名',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //   },
      // },
    },
    build: {
      outDir: env.VITE_OUTPUT_DIR,
    },
  };
});
