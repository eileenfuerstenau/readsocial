const express = require('express')
const NominatedBook = require('../models/NominatedBook')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await NominatedBook.find().catch(next))
})

router.post('/', async (req, res, next) => {
  res.json(await NominatedBook.create(req.body).catch(next))
})

module.exports = router
