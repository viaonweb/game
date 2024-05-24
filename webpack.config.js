const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './game.js',
  output: {
    filename: 'game.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
    // library: 'up',
    // libraryTarget: 'umd',
    // umdNamedDefine: true,
    // globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts','.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // 优化配置
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
