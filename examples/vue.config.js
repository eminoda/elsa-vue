// 官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const isDev = process.env.NODE_ENV == 'development'
module.exports = {
  publicPath: isDev ? '/' : '/elsa',
  outputDir: resolve('dist'),
  configureWebpack: {
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
      alias: {
        '@': resolve('src'),
        main: resolve('../src/main'),
        vue$: 'vue/dist/vue.runtime.esm.js'
      }
    },
    // webpack build externals
    externals: isDev
      ? {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          'element-ui': 'ELEMENT'
        }
      : {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          'element-ui': 'ELEMENT'
        }
  }
}
