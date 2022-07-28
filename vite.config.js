import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

const path = require('path')
const postCssPxToRem = require('postcss-pxtorem')
export default defineConfig({
  base: './',
  build: {
    rollupOptions:{
      output:{
        assetFileNames:'static/[ext]/[name][hash].[ext]',
        chunkFileNames:'static/js/[name]-[hash].js',
        entryFileNames:'static/js/[name]-[hash].js'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: '8000',
    proxy: {
      '/service': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        configure: (proxy, options) => {

        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@view',
        replacement: path.resolve(__dirname, 'src/view')
      }
    ]
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    visualizer(),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*']
        })
      ]
    }
  }
})
