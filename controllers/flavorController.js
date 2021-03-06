var Flavor = require('../models/flavor')
var Brand = require('../models/brand')

var async = require('async')

//function for /flavor/list
exports.flavorList = function(req, res, next) {
   Flavor.find().populate('brand').exec(function (err, result) {
       if(err) { return next(err) }
       console.log(result)
       res.render('flavor_list', {title: 'Flavor List', result: result})
    })
}

exports.flavorListJSON = function(req, res, next) {
   Flavor.find().sort('brand name').exec(function (err, result) {
       if(err) { return next(err) }
       res.json(result)
    })
}

exports.flavorAdd = function(req, res, next) {
       Brand.find().exec(function (err, result) {
       if(err) { return next(err) }
       res.render('flavor_add', {title: 'Flavor Add', result: result})
    })
}

exports.flavorAddPost = function(req, res, next) {
        console.log(req.body)
    var mayberesult = Flavor({name: req.body.flavorname, brand: req.body.brand});
    mayberesult.save(function(err) {
        if(err) throw err
        
        res.sendStatus(201)
    })
}

exports.flavorDelete = function(req, res, next) {
    Flavor.findByIdAndRemove(req.params.itemid, function(err) {
        if(err) throw err
        res.sendStatus(200)
    })
}

exports.setOrder = function(req, res, next) {
    Flavor.update({ _id: req.params.itemid }, { reorder: true }, null, function(err) {
        if(err) throw err
        res.sendStatus(200)
    })
}

exports.unsetOrder = function(req, res, next) {
    Flavor.update({ _id: req.params.itemid }, { reorder: false }, null, function(err) {
        if(err) throw err
        res.sendStatus(200)
    })
}

exports.setRating = function(req, res, next) {
    Flavor.update({ _id: req.params.itemid }, { rating: req.body.rating }, null, function(err) {
        if(err) throw err
        res.sendStatus(200)
    })
}


exports.flavorListOrderJSON = function(req, res, next) {
    Flavor.find({ reorder: true }).sort('brand name').exec(function (err, result) {
        if(err) { return next(err) }
        res.json(result)
     })
 }
 