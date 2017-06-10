var Brand = require('../models/brand');

var async = require('async');

//function for /brand/list
exports.brandList = function(req, res, next) {
   Brand.find().exec(function (err, result) {
       if(err) { return next(err); }
       console.log(result);
       res.send(result);

    });
};

exports.brandCount = function(req, res, next) {
    var mayberesult = Brand.find();
    res.send('' + mayberesult);
};

exports.brandSave = function(req, res, next) {
    var mayberesult = Brand({shortname: 'TEST', longname: "LONGTEST"});
    Brand.save(function(err) {
        if(err) throw err;

        res.send('it worked');
    });
};
