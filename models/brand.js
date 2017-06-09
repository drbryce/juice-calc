var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BrandSchema = Schema(
    {
        shortname: {type: String, required: true},
        longname: {type: String, required: true}
    }
);

module.exports = mongoose.model('Brand', BrandSchema);