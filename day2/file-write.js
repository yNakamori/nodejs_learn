const fs = require('fs');
const path = require('path');
const https = require('https');

fs.writeFile(path.join(__dirname, 'hello.txt'), 'Node learn\n', 
	function(err){
		if (err) return console.log(":Error");
	});