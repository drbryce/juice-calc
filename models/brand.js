var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BrandSchema = Schema(
    {
        shortname: {type: String, required: true},
        longname: {type: String, required: true}
    }


);

BrandSchema
    .virtual('url')
    .get(function () {
        return '/brand/' + this._id;
    });

module.exports = mongoose.model('Brand', BrandSchema, 'Brand');