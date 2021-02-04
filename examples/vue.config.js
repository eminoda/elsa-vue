// 官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const isDev = process.env.NODE_ENV == 'development'
module.exports = {
  publicPath: isDev ? '/' : '/elsa',
  outputDir: resolve('dist'),
  chainWebpack: config => {
    config.module
      .rule('markdown-loader')
      .test(/\.md$/)
      .use('markdown-loader')
      .loader(path.join(__dirname, 'build/markdown-loader'))
      .end()
      .use('vue-loader')
      .loader('vue-loader')
      .end()
  },
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
        },
    devServer: {
      host: '0.0.0.0',
      open: true,
      proxy: {
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        ['/api']: {
          target: `http://127.0.0.1:3000`,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      },
      disableHostCheck: true
    }
  }
}
