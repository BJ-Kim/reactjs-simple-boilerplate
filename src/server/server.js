var path         = require('path');
var Express      = require('express');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var compression  = require('compression');
var morgan       = require('morgan');
var app          = Express();
var server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST   = path.resolve(__dirname, '../../dist');

app.use(compression());
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.
app.use(cookieParser());
app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

var apiRoutes = Express.Router(); 

app.post('/authenticate', function(req, res, next) {
  // You need add your own auth logic here
  res.json({token: 'test-token'});
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});

// this function is called when you want the server to die gracefully
// i.e. wait for existing connections
var gracefulShutdown = function() {
  console.log("Received kill signal, shutting down gracefully.");
  
  // TODO confirm this
  server._connections=0

  server.close();

  // if after 
  setTimeout(function() {
    console.error("Could not close connections in time, forcefully shutting down");
    process.exit();
  }, 3*1000);
}

// listen for TERM signal .e.g. kill 
process.on ('SIGTERM', gracefulShutdown);

// listen for INT signal e.g. Ctrl-C
process.on ('SIGINT', gracefulShutdown); 

// Hook for closing server
server.on('close', function () {
  console.log("Closing server");
});
