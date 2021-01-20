const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../libs'),
    filename: 'elsa.js',
    libraryExport: 'default',
    library: 'ELSA',
    libraryTarget: 'window',
    umdNamedDefine: true,
  },
  resolve: {
    alias: {},
    fallback: { stream: false },
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
  },
  externals: {
    vue: 'Vue',
    'element-ui': 'ELEMENT',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
