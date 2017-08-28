var express = require('express')
var jwt = require('jsonwebtoken')
var router = express.Router()
var User = require('../models/user')
var AuthController = require('../controllers/authController')
var config = require ('../config')


// process login data
router.post('/login',  function(req, res, next) {
  if (req.body.username && req.body.password) {
    AuthController.validateUser(req.body.username, req.body.password, (results) => {
      if (results) {
      console.log('good combo')
        // create token
        jwt.sign({ username: req.body.username }, config.secret, function(err, token) {
          if (err) throw err
          // respond with token
          res.status(200).send(JSON.stringify({ 'token': token }))
        })
    } else {
      res.sendStatus(401) // invalid login
    }
  })}
})


router.get('/checktoken', AuthController.checkToken,  function(req, res) {

  res.sendStatus(200)
})

module.exports = router
