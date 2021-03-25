const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  isbn: {
    type: Number,
  },
})

module.exports = mongoose.model('NominatedBook', schema)
