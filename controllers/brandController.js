var Brand = require('../models/brand');

var async = require('async');

//function for /brand/list
exports.brandList = function(req, res, next) {
   Brand.find(function (err, result) {
       if(err) { return next(err); }
       
       res.send(result);

    });
};

