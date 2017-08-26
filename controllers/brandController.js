var Brand = require('../models/brand');

var async = require('async');

//function for /brand/list
exports.brandList = function(req, res, next) {
   Brand.find().exec(function (err, result) {
       if(err) { return next(err); }
       res.render('brand_list', {title: 'Brand List', result: result});
    });
};

exports.brandListJSON = function(req, res, next) {
   Brand.find().sort('shortname').exec(function (err, result) {
       if(err) { return next(err); }
       res.json(result);
    });
};

exports.brandCount = function(req, res, next) {
    var mayberesult = Brand.find();
    res.send('' + mayberesult);
};

exports.brandSave = function(req, res, next) {
    var mayberesult = Brand({shortname: 'T2', longname: "LONGTEST2"});
    mayberesult.save(function(err) {
        if(err) throw err;

        res.send('it worked');
    });
};

exports.brandAdd = function(req, res, next) {
    res.render('brand_add', {title: 'Brand Add'});
};

exports.brandAddPost = function(req, res, next) {
    var mayberesult = Brand({shortname: req.body.sname, longname: req.body.lname});
    console.log(req.body);
    mayberesult.save(function(err) {
        if(err) throw err;
        res.send('it\'s gone');
    });
};

exports.brandDelete = function(req, res, next) {
    //console.log(req)
    Brand.findByIdAndRemove(req.params.itemid, function(err) {
        if(err) throw err;
        res.send(200);
    });
};