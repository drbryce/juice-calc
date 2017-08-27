var express = require('express');
var router = express.Router();
var User = require('../models/user');
var AuthController = require('../controllers/authController');
var jwt = require('jsonwebtoken');


//process login data
router.post('/login',  function(req, res, next) {
  if (req.body.username && req.body.password) {
    AuthController.validateUser(req.body.username, req.body.password, function(result) {
      if (result) {
        //create token
        jwt.sign({ username: req.body.username }, process.env.SECRET_KEY, function(err, token) {
          if (err) throw err;
          //respond with token
          res.cookie('juice-calc-token',token, {expires: new Date(Date.now() + 60 * 1000)}).sendStatus(200);
        })
      } else {
        res.sendStatus(401); //invalid login
      }
    })}
  else {
    res.sendStatus(401); //invalid login
  }}); 


router.get('/checktoken', AuthController.checkToken,  function(req, res) {

  res.sendStatus(200);
});



module.exports = router;
