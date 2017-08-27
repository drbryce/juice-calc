var express = require('express');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

exports.validateUser = function(username, password, done) {
  User.getUserByUsername(username, function(err, user) {
    if(err) throw err;
    if(!user) {
      done(false); //bad username
    } else {
      User.comparePassword(password,user.password, function(err, isMatch) {
        if(err) throw err;
        if(isMatch) {
          done(true); //good combo
        } else {
          done(false); //bad pw
        }
      });
    }});
}

exports.checkToken = function (req, res, next) {
  console.log('cookies: ' + JSON.stringify(req.cookies));
  jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decoded) {
    if (err) {
      res.clearCookie('juice-calc-token');
      res.sendStatus(401); //bad token
    }
    else next();  
  });
}
