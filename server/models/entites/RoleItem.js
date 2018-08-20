var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelName = 'RoleItem';

var schemaTemp = new Schema({
    roleItemId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    title: {
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
        
