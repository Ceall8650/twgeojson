var http = require('http');
var url = require('url');

function start (route, handle) {
	http.createServer(function (req, res) {
		var pathname = url.parse(req.url).pathname
		var output = route(handle, pathname);
		// console.log(output, output.content)

		res.writeHead(200, {'Content-Type': output.type});
		res.write(output.content);
		res.end();
	}).listen(8888)
}

exports.start = start