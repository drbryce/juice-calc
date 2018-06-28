var express = require('express')
var router = express.Router()
var AuthController = require('../controllers/authController')


var flavorController = require('../controllers/flavorController')

router.get('/', function(req, res, next) {
  res.redirect('/flavor/list')
})

router.get('/list', AuthController.checkToken, flavorController.flavorList)

router.get('/listJSON', AuthController.checkToken, flavorController.flavorListJSON)

router.get('/listOrderJSON', AuthController.checkToken, flavorController.flavorListOrderJSON)

router.post('/add', AuthController.checkToken, flavorController.flavorAddPost)

router.delete('/delete/:itemid', AuthController.checkToken, flavorController.flavorDelete)

router.post('/order/flag/:itemid', AuthController.checkToken, flavorController.setOrder)

router.post('/order/unflag/:itemid', AuthController.checkToken, flavorController.unsetOrder)

router.post('/rating/:itemid', AuthController.checkToken, flavorController.setRating)

module.exports = router
