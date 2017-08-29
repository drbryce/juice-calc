var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/authController')
var recipeController = require('../controllers/recipeController');

router.get('/list/:recipeID', AuthController.checkToken, recipeController.recipeGet)

router.get('/listJSON', AuthController.checkToken, recipeController.recipeListJSON)

router.delete('/delete/:itemid', AuthController.checkToken, recipeController.recipeDelete)

router.post('/add', AuthController.checkToken, recipeController.recipeAddPost)

module.exports = router
