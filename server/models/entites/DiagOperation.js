
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('DiagOpration', new Schema({
    diagOprationId: {
        type: String,
        required: true
      },
    partyID: {
        type: Number,
        required: true
      },
    value: {
        type: String,
        required: true
      },
    status: {
        type: String,
        required: false
      },
    creatDateTime: {
        type: Date,
        required: true
      },
}));