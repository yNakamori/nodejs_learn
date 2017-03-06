var express = require('express');
var router = express.Router();
var collection = require('../js/mongo_collection');

router.get('/', function (req, res, next) {
    res.render('login',{title: "Login page."});
});

router.post('/', function (req, res, next) {

    var username = req.body.username;
    var pw = req.body.userpw;
    var query = {"username": username, "pw": pw};

    //res.redirect('/display');
    // collection().find(query).forEach( function(elem) {
    //     console.log();
    //     if(elem.username == username && elem.pw == pw) {
    //         res.render('display', {"username": username, "userpw": pw});
    //     }else{
    //         res.render('login', {error_message: "No member", title: "Login page."});
    //     }
    // });

    //ここでやるべきじゃない
    collection('users').find(query).toArray(function(err, docs){
        var userName = docs.length? docs[0].username: false;
        if (userName == false) {
            res.render('login', {error_message: "No member.", title: "Login page."});
        }else {
            req.session.user = userName;
          //  res.render('display',{username: userName, title: 'chatルーム'});
            res.redirect('display')
        }
    });
});

module.exports = router;