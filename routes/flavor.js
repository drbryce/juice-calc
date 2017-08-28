var express = require('express')
var router = express.Router()
var AuthController = require('../controllers/authController')


var flavorController = require('../controllers/flavorController')

router.get('/', function(req, res, next) {
  res.redirect('/flavor/list')
})

router.get('/list', AuthController.checkToken, flavorController.flavorList)

router.get('/listJSON', flavorController.flavorListJSON)

router.get('/add', flavorController.flavorAdd)

router.post('/add', AuthController.checkToken, flavorController.flavorAddPost)

router.get('/delete/:itemid', flavorController.flavorDelete)

router.delete('/delete/:itemid', AuthController.checkToken, flavorController.flavorDelete)

module.exports = router