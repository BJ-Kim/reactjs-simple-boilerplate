var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./config/webpack.dev');

new WebpackDevServer(webpack(config), {
  proxy: {
    "*": "http://localhost:3000"
  },
  publicPath         : config.output.publicPath,
  hot                : true,
  historyApiFallback : true,
  stats              : { colors : true }
}).listen(3001, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3001');
});
