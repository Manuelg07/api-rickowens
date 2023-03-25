const mongoose = require('mongoose');

const RopaSchema = new mongoose.Schema({
    año: {
      type: Number,
      required: true
    },
    colección: {
      type: String,
      required: true
    },
    diseñador: {
      type: String,
      required: true
    },
    foto: {
      type: String,
      required: true
    },
    modelo: {
      type: String,
      required: true
    }
  });
  

module.exports = mongoose.model('Ropa', RopaSchema);
