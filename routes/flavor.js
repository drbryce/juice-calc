var express = require('express');
var router = express.Router();

var flavorController = require('../controllers/flavorController');

router.get('/', function(req, res, next) {
  res.redirect('/flavor/list');
});

router.get('/list', flavorController.flavorList);

router.get('/add', flavorController.flavorAdd);

router.post('/add', flavorController.flavorAddPost);

router.get('/delete/:itemid', flavorController.flavorDelete);

module.exports = router;