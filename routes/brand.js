var express = require('express');
var router = express.Router();

var brandController = require('../controllers/brandController');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', brandController.brandList);

router.get('/count', brandController.brandCount);

router.get('/save', brandController.brandSave);

module.exports = router;