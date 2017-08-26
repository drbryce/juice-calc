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
    for(var i=0; i<req.body.flavors.length; i++){
        req.body.flavors[i].percentage = parseFloat(req.body.flavors[i].percentage)
    }
    var mayberesult = Recipe(req.body)
    mayberesult.save(function(err) {
        if(err) {
            console.log(err)
            throw err
        }
        
        res.send(201)
    })
    
};

exports.recipeListJSON = function(req, res, next) {
   Recipe.find().populate('flavor ','brand').exec(function (err, result) {
       if(err) { return next(err); }
       console.log(result)
       res.json(result);
    });
};

exports.recipeGet = function(req, res, next) {
   Recipe.findById(req.params.recipeID).exec(function (err, result) {
       if(err) { return next(err); }
       res.json(result);
    });
};

exports.recipeDelete = function(req, res, next) {
    Recipe.findByIdAndRemove(req.params.itemid, function(err) {
        if(err) throw err;
        res.send(200);
    });
};