const path = require('path')

const defaultClassNames = {
  clipper: 'clipper',
  scroller: 'scroller',
  track: 'track',
  bar: 'bar',
  baron: 'baron',
}

module.exports = {
  entry: './src/component.js',
  output: {
    filename: 'es5.js',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: 'import s from \'./styles.css\'',
              replace: `var s = ${JSON.stringify(defaultClassNames)}`,
            },
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },

  externals: {
    react: 'umd react',
    'react-dom' : 'umd react-dom',
  },
}
