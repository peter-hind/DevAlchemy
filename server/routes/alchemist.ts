import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/cauldronbender', (req, res) => {
  res.render('cauldronbender')
})

export default router
