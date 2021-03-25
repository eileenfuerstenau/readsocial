const express = require('express')
const NominatedBook = require('../models/NominatedBook')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json(await NominatedBook.find().catch(next))
})

/* router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await NominatedBook.findById(id).catch(next))
})
 */
router.post('/', async (req, res, next) => {
  res.json(await NominatedBook.create(req.body).catch(next))
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  res.json(await NominatedBook.findByIdAndDelete(id).catch(next))
})

module.exports = router
