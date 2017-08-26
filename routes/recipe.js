var express = require('express');
var router = express.Router();

var recipeController = require('../controllers/recipeController');

router.get('/', function(req, res, next) {
  res.redirect('/list');
});

router.get('/list', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list/:recipeID', recipeController.recipeGet)

router.get('/listJSON', recipeController.recipeListJSON)

router.delete('/delete/:itemid', recipeController.recipeDelete);

router.get('/add', recipeController.recipeAdd);

router.post('/add', recipeController.recipeAddPost);

module.exports = router;