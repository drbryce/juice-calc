var express = require('express')
var router = express.Router()
var AuthController = require('../controllers/authController')


var flavorController = require('../controllers/flavorController')

router.get('/', function(req, res, next) {
  res.redirect('/flavor/list')
})

router.get('/list', AuthController.checkToken, flavorController.flavorList)

router.get('/listJSON', AuthController.checkToken, flavorController.flavorListJSON)

router.post('/add', AuthController.checkToken, flavorController.flavorAddPost)

router.delete('/delete/:itemid', AuthController.checkToken, flavorController.flavorDelete)

module.exports = router
