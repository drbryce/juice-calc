var express = require('express');
var router = express.Router();

var brandController = require('../controllers/brandController');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', brandController.brandList);

module.exports = router;