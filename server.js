var finalhandler = require('finalhandler'),
	http = require('http'),
	serveStatic = require('serve-static'),
    spawn = require('child_process').spawn;

var port = 8080, 
	host = 'localhost';

var serve = serveStatic('public');

function run_cmd(cmd, args, callBack ) {
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
} // ()


var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});


server.listen(port, host);
console.log('Server running on http://'+host+':'+port);

run_cmd( "grunt", ["default"], function(text) { console.log (text) });