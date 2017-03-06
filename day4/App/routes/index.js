var express = require('express');
var router = express.Router();
//mongo.js呼び出し
// require('../js/mongo');

/* GET home page. */
router.get('/', function(req, res, next) {
      res.redirect('/login');
});

module.exports = router;
