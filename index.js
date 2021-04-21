const express = require('express');
const path = require('path')
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const PORT = process.env.PORT || 3000

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(express.static('public'))

app.get('/*',  (req, res)=> {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
 });

app.listen(PORT, function () {
  console.log('Server is up and running on port ' + PORT);
});