var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelName = 'ECURgistrd';

var schemaTemp = new Schema({
    regeCUId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    eCUXMLId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    lastModifiedTime: {
        type: Date,
        required: true,
        default: Date.now
      }
});

var ECURgistrd = mongoose.model(modelName, schemaTemp);

module.exports = ECURgistrd;