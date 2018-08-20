
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Country', new Schema({
    countrId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    title: {
        type: String,
        required: true
      },
}));
