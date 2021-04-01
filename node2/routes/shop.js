const path = require('path')
const express = require('express')

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
  //   console.log('slash in another mw')
  //   res.send('<h1>Hello!</form>')
  //   res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
  // console.log('products: ', adminData.products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  const products = adminData.products
  res.render('shop', { prods: products, docTitle: 'Shop' })
})

module.exports = router
