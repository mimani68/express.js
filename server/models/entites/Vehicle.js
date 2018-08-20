var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelName = 'RoleItem';

var schemaTemp = new Schema({
    vehicleId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    vehicleBrandId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    companyId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    iDN: {
        type: String,
        required: true
      },
    vIN: {
        type: String,
        required: true
      },
    enginNumber: {
        type: String,
        required: true
      },
    bodyNumber: {
        type: String,
        required: true
      },
    model: {
        type: String,
        required: true
      },
    pelak: {
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
        