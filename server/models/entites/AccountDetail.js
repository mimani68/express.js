
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('AccountDtail', new Schema({
    accountId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    accountDetailId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    amount: {
        type: Number,
        required: true
      },
    dscription: {
        type: String,
        required: true
      },
    accountType: {
        type: String,
        required: true
      },
    creationTime: {
        type: Date,
        default: Date.now
    }
}));
