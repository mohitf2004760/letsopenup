//Load required packages
var User = require('./user.model');
var authController = require('./auth');

//Create endpoint /api/users for post
exports.postUsers = function (req,res){
var user = new User({
        username:req.body.username,
        password:req.body.password,
        dob:req.body.dob,
        gender:req.body.gender,
        name:req.body.name
    });
user.save(function(err,user) {
    if
    (err) res.send(err);
    else
    res.json({message:'new beer drinker added to the locker room'});
});
};


//Create endpint for /api/users for get
exports.getUsers = function(req,res){
  User.find(function(err,users){
      if(err)
        res.send(err);
      res.json(users);
  });
};

