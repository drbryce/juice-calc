var mongoose = require('mongoose')
var autopopulate = require('mongoose-autopopulate')
var Schema = mongoose.Schema

var FlavorSchema = Schema(
    {
        name: {type: String, required: true},
        brand: {type: Schema.ObjectId, ref: 'Brand', autopopulate: true},
        reorder: {type: Boolean},
        rating: {type: Number}
    }
)

FlavorSchema
    .virtual('url')
    .get(function () {
        return '/flavor/' + this._id
    })

FlavorSchema.plugin(autopopulate)
module.exports = mongoose.model('Flavor',FlavorSchema, 'Flavor')