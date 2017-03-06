var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const moment = require('moment');
const session = require('express-session');

// MongoClient.connect('mongodb://yusuke:4EG3pWxz@ds113670.mlab.com:13670/springcorsedb', function (err, database) {
//     if (err) return console.log("Error : "+ err);
//     //db = database;
//     var collection = database.collection('user');

    //find
    // collection.find().forEach( function(elem){
    //     console.log(elem.username);
    // });
    //insert
    //var value ={username: "konndou", pw: "0003"};
    // collection.insert(value);
    // collection.insertOne(value);
    // const query = db.user.find();
    // console.log(db);

    //update
    // collection.updateMany({username: "HAJIME"},
    //     {$set: {username: "hajime"}},
    //     function (err, r) {
    //         console.log("update: complete");
    //     });

    //delete
    // collection.deleteMany({username: "hajime"},function (err, r) {
    //    console.log("delete complete");
    // });
// });

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var display = require('./routes/display');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// var sessionCheck = function(req, res, next) {
//     if (req.session) {
//         next();
//     } else {
//         res.redirect('/login');
//     }
// };

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}));

var session_check = function (req, res, next) {
    if (req.session.user){
        next();
    }else {
        res.redirect('/login');
    }
        };

app.use('/login', login);
//一度セッション情報からログインチェックを挟む
app.use('/', session_check, index);
app.use('/users', users);
app.use('/display',display);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
