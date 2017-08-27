var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/authController');

var brandController = require('../controllers/brandController');

router.get('/', function(req, res, next) {
  res.redirect('/brand/list');
});

router.get('/listjson', AuthController.checkToken, brandController.brandListJSON);

router.get('/count', brandController.brandCount);

router.get('/save', brandController.brandSave);

router.get('/add', brandController.brandAdd);

router.post('/add', AuthController.checkToken, brandController.brandAddPost);

router.delete('/delete/:itemid', brandController.brandDelete);


module.exports = router;