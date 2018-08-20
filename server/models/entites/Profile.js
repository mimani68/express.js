var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelName = 'Profile';

var schemaTemp = new Schema({
    profileId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    partyId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    mobile: {
        type: String,
        required: true
      },
    dscription: {
        type: String,
        required: true
      },
    Status: {
        type: String,
        required: true
      },
    lastModifiedTime: {
        type: Date,
        required: true,
        default: Date.now
      }
});

var Profile = mongoose.model(modelName, schemaTemp);

module.exports = Profile;
        