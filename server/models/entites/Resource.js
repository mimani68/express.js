var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelName = 'Resource';

var schemaTemp = new Schema({
    resourceId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    title: {
        type: String,
        required: true
      },
    resourceContent: {
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

var Resource = mongoose.model(modelName, schemaTemp);

module.exports = Resource;
        