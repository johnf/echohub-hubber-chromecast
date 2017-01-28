var path = require('path'); // eslint-disable-line no-var

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'hubber-chromecast',
    libraryTarget: 'umd',
    filename: 'index.js',
  },
  externals: [
    'debug',
    'phetch',
    'chromecast-discover',
    'castv2-client',
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};