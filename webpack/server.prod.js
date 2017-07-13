import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  devtool: 'eval',

  context: path.join(__dirname, '../src'),

  entry: [
    'babel-polyfill',
    './server',
  ],

  output: {
    path: path.join(__dirname, '../dist/public'),
    filename: '../server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/',
  },

  target: 'node',

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:5]',
          'postcss-loader',
        ],
      },
    ],
  },
};
