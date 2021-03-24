const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
})

module.exports = mongoose.model('NominatedBook', schema)
