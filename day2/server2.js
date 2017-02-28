const http = require('http');
const server = http.createServer();
const fs = require('fs');

server.on('request', function(req, res){
	fs.readFile('./index.html', {encoding:'utf8'}, function(err, data){
		if (err){
			res.writeHead(404, {'Context-Type':'text/plain'});
			res.write('page not found');
			return res.end();
		}
		res.writeHead(200, {'Context-Type':'text/html'});
		res.write(data);
		res.end();
	});
});
const port = 8080;

server.listen(port);