var Flavor = require('../models/flavor');
var Brand = require('../models/brand');

var async = require('async');

//function for /flavor/list
exports.flavorList = function(req, res, next) {
   Flavor.find().populate('brand').exec(function (err, result) {
       if(err) { return next(err); }
       console.log(result);
       res.render('flavor_list', {title: 'Flavor List', result: result});
    });
};

exports.flavorAdd = function(req, res, next) {
       Brand.find().exec(function (err, result) {
       if(err) { return next(err); }
       res.render('flavor_add', {title: 'Flavor Add', result: result});
    });
};

exports.flavorAddPost = function(req, res, next) {
        console.log(req.body);
    var mayberesult = Flavor({name: req.body.flavorname, brand: req.body.brand});
    mayberesult.save(function(err) {
        if(err) throw err;
        
        res.redirect('/flavor/add');
    });
};

exports.flavorDelete = function(req, res, next) {
    Flavor.findByIdAndRemove(req.params.itemid, function(err) {
        if(err) throw err;
        res.redirect('/flavor/list');
    });
};