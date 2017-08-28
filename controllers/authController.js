var express = require('express')
var jwt = require('jsonwebtoken')
var User = require('../models/user')
var config = require('../config')

exports.validateUser = function(username, password, callback) {
  User.getUserByUsername(username, function(err, user) {
    if(err) throw err
    if(!user) {
      callback(false) //bad username
    } else {
      User.comparePassword(password,user.password, function(err, isMatch) {
        if(err) throw err
        if(isMatch) {
          callback(true) //good combo
        } else {
          callback(false) //bad pw
        }
      })
    }
  })
}

exports.checkToken = function (req, res, next) {
  jwt.verify(req.headers.token, config.secret, function(err, decoded) {
    if (err) {
      res.sendStatus(401); //bad token
    }
    else next()  
  })
}

exports.checkSession = function (req, res, next) {
  if(req.isAuthenticated()) {
    return next()
  } else {
    res.sendStatus(401)
  }
}

