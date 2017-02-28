const os = require('os');
console.log(os.hostname());
console.log(os.arch());
console.log( (os.totalmem()/1e6).toFixed(1) + " MB");
console.log( (os.freemem()/1e6).toFixed(1) + " MB");