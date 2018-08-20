var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelName = 'ECU';

var schemaTemp = new Schema({
    eCUId: {
        type: Schema.Types.ObjectId,
        required: true
      },
    eCUXMLId: {
        type: String,
        required: true
      },
    eCUtitle: {
        type: String,
        required: true
      },
    eCUSeries: {
        type: String,
        required: false
      },
    eCUModel: {
        type: String,
        required: false
      },
    eCUThumbnail: {
        type: String,
        required: false
      },
    TchnicalSht: {
        type: String,
        required: false
      },
});

var ECU = mongoose.model(modelName, schemaTemp);
module.exports = ECU;