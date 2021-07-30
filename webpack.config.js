const path = require('path');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/index.js']
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './build',
    port: 8080,
    open: true,
    hot: true,
    overlay: true,
    writeToDisk: false,

  }
}