var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FlavorSchema = Schema(
    {
        name: {type: String, required: true},
        brand: {type: Schema.ObjectID, ref: 'Brand'}
    }
);

module.exports = mongoose.model('Flavor',FlavorSchema);