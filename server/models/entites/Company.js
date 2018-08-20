
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Company', new Schema({
    
    /**************************************************
     *                                                *
     *  01        Objct Mtehod                        *
     *                                                *
     **************************************************/
    companyId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    TitleFa: {
      type: String,
      required: true
    },
    TitleEn: String,
    Url: String,
    }
  )
);