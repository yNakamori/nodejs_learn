/**
 * Created by yusuke on 西暦17/03/03.
 */
var express = require('express');
var router = express.Router();
var collection = require('../js/mongo_collection');

router.get('/', function(req, res, next) {
    collection('chat_contents').find().toArray(function (err, docs) {
        var chat_contents = docs.length? docs[0].message: false;
        if (chat_contents == false) {
            res.render('display', {error_message: "No contents.", title: "chatルーム"});
        }else {
            res.render('display',{msg: docs, title: 'chatルーム'});
           // console.log(docs);
        }
    });
});

router.post('/', function (req, res, next) {
   // console.log(req.session.user);

    //書き込みがなかった時
    if (req.body.message_content === ""){
        console.log("insert failure");
        // res.render('display', {error_message: "Please enter the content", title: "chatルーム"});
        res.redirect('/display');
    }else {
        collection('chat_contents').insert({"username": req.session.user, "message": req.body.message_content});
        console.log("insert success:" + req.body.message_content);
        res.redirect('/display');
    }
});

module.exports = router;