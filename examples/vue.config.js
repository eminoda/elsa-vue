// 官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        main: resolve('../src/main'),
        '@': resolve('src'),
      },
    },
    // webpack build externals
    externals: {},
    // devServer: {
    //   host: '0.0.0.0',
    //   open: true,
    //   proxy: {
    //     // detail: https://cli.vuejs.org/config/#devserver-proxy
    //     ['/api']: {
    //       target: `http://127.0.0.1:5000`,
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/api': '',
    //       },
    //     },
    //   },
    //   disableHostCheck: true,
    // },
  },
};
