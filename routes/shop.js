const path = require('path')
const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/', (req, res, next) => {
  //   console.log('slash in another mw')
  //   res.send('<h1>Hello!</form>')
  //   res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router
