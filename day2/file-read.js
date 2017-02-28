const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'), 
	{ encoding: 'utf8' },
	function(err, data){
		if(err) return console.error(":Error");
		process.exit(0);
		console.log("ファイルの内容");
		console.log(data);
});