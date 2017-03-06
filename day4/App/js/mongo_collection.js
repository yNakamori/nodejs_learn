const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://yusuke:4EG3pWxz@ds113670.mlab.com:13670/springcorsedb';

var db;

MongoClient.connect(url, function (err, database){
    if (err) console.log(err);
    console.log("open DB");
    db = database;
    // db.on('close', function () {
    //    console.log("close DB");
    // });
});

var collection = function (name) {
  return db.collection(name);
};

module.exports = collection;