const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin({filename: 'styles.css'})],
  entry: './src/app.js',
  output: {
        path: path.resolve(__dirname, 'public/src'),
        filename: 'bundle.js',
        publicPath: "/",
        clean: true,
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins: [
              require('@babel/plugin-proposal-object-rest-spread'),
                require('@babel/plugin-transform-spread')
            ]
          }
      }
      }, {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }, {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/src',
    historyApiFallback: true
  }
}