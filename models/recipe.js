var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autopopulate = require('mongoose-autopopulate')

var Flavor = require('./flavor');
var Brand = require('./brand');

/*var flavorAndPercent = Schema(
    {
        percentage: {type: Number, required: true},
        flavor: {type: Schema.ObjectId, ref: 'Flavor'}    
    }
);
*/
var RecipeSchema = Schema(
    {
        name: {type: String, required: true},
        flavors: [{
            percentage: {type: Number, required: true},
            flavor: {type: Schema.ObjectId, ref: 'Flavor', autopopulate: true}
    }],
        notes: {type: String},
        lastMixed: {type: Date},
        rating: {type: Number}
    }
);


RecipeSchema
    .virtual('url')
    .get(function () {
        return '/recipe/' + this._id
    });

RecipeSchema.plugin(autopopulate)
module.exports = mongoose.model('Recipe', RecipeSchema, 'Recipe')
