var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RecipeSchema = Schema(
    {

    }
);

module.exports = mongoose.model('Recipe', RecipeSchema, 'Recipe');