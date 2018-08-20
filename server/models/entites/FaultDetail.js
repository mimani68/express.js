var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelName = 'FaultDtail';

var schemaTemp = new Schema({
    faultItmID: {
        type: Schema.Types.ObjectId,
        required: true
      },
    titlFa: {
        type: String,
        required: true
      },
    abbrvation: {
        type: String,
        required: true
      },
    dscription: {
        type: String,
        required: false
      },
    needSOS: {
        type: Boolean,
        required: false
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

var FaultDtail = mongoose.model(modelName, schemaTemp);

module.exports = FaultDtail;
