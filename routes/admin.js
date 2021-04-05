const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
  //   console.log('add product')
  //   res.send(
  //     '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>'
  //   )
  //   res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('add-product', {
    pageTitle: 'Add product',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
})

router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  products.push({ title: req.body.title })
  res.redirect('/')
})

exports.routes = router
exports.products = products
