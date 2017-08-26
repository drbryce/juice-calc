var express = require('express');
var router = express.Router();

var brandController = require('../controllers/brandController');

router.get('/', function(req, res, next) {
  res.redirect('/brand/list');
});

router.get('/list', brandController.brandList);

router.get('/listjson', brandController.brandListJSON);

router.get('/count', brandController.brandCount);

router.get('/save', brandController.brandSave);

router.get('/add', brandController.brandAdd);

router.post('/add', brandController.brandAddPost);

router.get('/delete/:itemid', brandController.brandDelete);

router.delete('/delete/:itemid', brandController.brandDelete);


module.exports = router;