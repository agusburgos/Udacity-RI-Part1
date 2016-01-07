var finalhandler = require('finalhandler'),
	http = require('http'),
	serveStatic = require('serve-static');

var port = 8080, 
	host = 'localhost';

var serve = serveStatic('public');

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(port, host);
console.log('Server running on http://'+host+':'+port);