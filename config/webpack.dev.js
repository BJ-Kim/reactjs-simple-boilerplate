var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry  : [
    'webpack-dev-server/client?http://0.0.0.0:3001', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',                   // "only" prevents reload on syntax errors
    path.resolve(__dirname, '../src/client/client.js'),
  ],
  output : {
    path       : path.resolve(__dirname, '../dist'),
    filename   : 'bundle.js',
    publicPath : 'http://0.0.0.0:3001/assets/'
  },
  
  module: {
    loaders: [
      {
        test    : /src\/.+.jsx?$/,
        exclude : /(node_modules|bower_components)/,
        loaders : ['react-hot','babel']
      },

      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      //{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.css$/,          loader: "style-loader!css-loader" },
      { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,          loader: "file-loader" },
      { test: /\.eot$/,          loader: "file-loader" },
      { test: /\.svg$/,          loader: "file-loader" },
      { test: /\.(png|jpg)$/,    loader: "url?limit=10000" } // use base64 data uri for images smaller than 10K
    ] 
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ] 
};
