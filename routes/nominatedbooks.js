const express = require('express')
const NominatedBook = require('../models/NominatedBook')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await NominatedBook.find().catch(next))
})

router.post('/', async (req, res, next) => {
  res.json(await NominatedBook.create(req.body).catch(next))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await NominatedBook.findByIdAndDelete(id).catch(next))
})

router.patch('/:id/vote', async (req, res, next) => {
  const { id } = req.params
  res.json(
    await NominatedBook.findByIdAndUpdate(
      id,
      { $inc: { votes: 1 } },
      { new: true }
    ).catch(next)
  )
})

module.exports = router
