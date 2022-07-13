import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const postCssPxToRem=require('postcss-pxtorem')
export default defineConfig({
  server:{
    host:'0.0.0.0',
    proxy:{
      '/service':{
        target: 'https://escloudt.qinjia001.com/',
        changeOrigin:true,
        configure:(proxy,options)=>{
          
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
    vue()],
    css:{
      postcss:{
        plugins:[
          postCssPxToRem({
            rootValue:37.5,
            propList:['*']
          })
        ]
      }
    }
})
