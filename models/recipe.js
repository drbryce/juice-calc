var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flavorAndPercent = Schema(
    {
        percentage: {type: Number, required: true},
        flavor: {type: Schema.ObjectId, ref: 'Flavor'}    
    }
);

var RecipeSchema = Schema(
    {
        name: {type: String, required: true},
        flavors: [flavorAndPercent],
        notes: {type: String}
    }
);

RecipeSchema
    .virtual('url')
    .get(function () {
        return '/recipe/' + this._id;
    });

module.exports = mongoose.model('Recipe', RecipeSchema, 'Recipe');