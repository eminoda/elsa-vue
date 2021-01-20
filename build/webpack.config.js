const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../libs'),
    filename: 'elsa.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'ELSA',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
  },
  externals: [
    Object.assign({
      vue: 'vue',
    }),
    nodeExternals(),
  ],
  stats: {
    children: false,
  },
  optimization: {
    minimize: false,
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
