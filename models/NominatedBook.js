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
  votes: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('NominatedBook', schema)
