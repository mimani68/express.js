var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelName = 'RoleItem';

var schemaTemp = new Schema({
    vehicleId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    titlFa: {
        type: String,
        required: true
      },
    titlEn: {
        type: String,
        required: true
      },
    type: {
        type: String,
        required: true
      },
    capacity: {
        type: String,
        required: true
      },
    cylender: {
        type: String,
        required: true
      },
    Axis: {
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

var RoleItem = mongoose.model(modelName, schemaTemp);

module.exports = RoleItem;
