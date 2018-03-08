const path = require('path');

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
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react')
    }
  }
};
