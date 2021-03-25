const express = require('express')
const RecommendedBook = require('../models/RecommendedBook')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await RecommendedBook.find().catch(next))
})

module.exports = router
