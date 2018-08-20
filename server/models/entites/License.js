var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelName = 'License';

var schemaTemp = new Schema({
    assingdPartLicnsID: {
        type: Schema.Types.ObjectId,
        required: true
      },
    ItemInventoryID: {
        type: Schema.Types.ObjectId,
        required: true
      },
    abbrvation: {
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

var License = mongoose.model(modelName, schemaTemp);

module.exports = License;

