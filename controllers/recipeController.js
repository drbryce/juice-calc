var Flavor = require('../models/flavor');
var Brand = require('../models/brand');
var Recipe = require('../models/recipe');

var async = require('async');

//function for /recipe/add
exports.recipeAdd = function(req, res, next) {
       Flavor.find().populate('brand').exec(function (err, result) {
       if(err) { return next(err); }
       console.log(result);
       res.render('recipe_add', {title: 'Recipe Add', flavors: result});
    });
 
    
};

exports.recipeAddPost = function(req, res, next) {
    res.send(req.body);
};