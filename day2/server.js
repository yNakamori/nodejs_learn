const http = require('http');
const server = http.createServer(function(req, res){
	console.log(req.method + ':' + req.url);
	res.end('ポムポムぷりん');
});

const port = 8080;
server.listen(port, function(){
	console.log('server running :port ' + port);
});