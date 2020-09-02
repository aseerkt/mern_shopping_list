const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Item Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
},{
  timestamps: true
})

// Exporting Item Models
module.exports = Item = mongoose.model('item', ItemSchema);