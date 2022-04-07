const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'nama tidak boleh kosong']
    },
    age: {
        type: Number,
        required: [true, 'umur tidak boleh kosong']
    },
    status:{
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive'
    }
  })
  
  const User = mongoose.model('User', UserScheme);

  module.exports = User