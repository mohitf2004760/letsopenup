//Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var cors = require('cors');

var userController = require('./server/user-mgmt/user');
var authController = require('./server/user-mgmt/auth');
//connect to db
mongoose.connect("mongodb://localhost/lou2");

//Create our express application
var app = express();

//use the body-parser package in our application
app.use(bodyParser.urlencoded({extended:true}));

//use the passport package in our application
app.use(passport.initialize());
app.use(cors());
app.use(express.static(__dirname + '/public'));
//Use environment defined port or 3000
var port = process.env.PORT || 3000;

//Create our express router
var router = express.Router();

//create endpoint handlers for /users
router.route('/users')
    .post(userController.postUsers)
    .get(userController.getUsers);

//create endpoint handlers for /login
router.route('/login')
    .post(userController.postUsers)
    .get(userController.getUsers);


//router.route('/').get(function(req, res) {
//    res.sendfile('/home/moksh/mohitm/work/letsopenup-current/letsopenup2/client/signup.html');
//});


//register all our routes with /api
app.use('/api',router);

//Start the server
app.listen(port);
console.log('Beerlocker app listening on port'+port);
