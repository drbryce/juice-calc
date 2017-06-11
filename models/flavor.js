var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FlavorSchema = Schema(
    {
        name: {type: String, required: true},
        brand: {type: Schema.ObjectId, ref: 'Brand'}
    }
);

FlavorSchema
    .virtual('url')
    .get(function () {
        return '/flavor/' + this._id;
    });

module.exports = mongoose.model('Flavor',FlavorSchema, 'Flavor');