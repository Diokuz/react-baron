const path = require('path');

console.log('!!', path.resolve(__dirname, 'node_modules/react'));

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // include: [path.resolve(__dirname, '../src')],
        use: ['babel-loader?cacheDirectory=true'],
      },
    ],
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react')
    }
  }
};
