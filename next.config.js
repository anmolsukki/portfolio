const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    );
    return config;
  }
};
