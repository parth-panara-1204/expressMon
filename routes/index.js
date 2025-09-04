var express = require('express');
const { default: mongoose } = require('mongoose');
const productModel = require('../models/product');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/add-product', function(req, res, next) {
  res.render('add-product', { title: 'Express' });
});

router.post('/add-product-process', function(req, res, next) {
  var tempData = {
    name: req.body.txt1,
    price: req.body.txt2,
    details: req.body.txt3
  }

  var mydata = productModel(tempData)
  mydata.save()
  .then(res.send('product added!'))
  .catch(err => console.log(err))
});

router.get('/display-product', function(req, res, next) {
  productModel.find()
  .then(data => {
    console.log(data)
    res.json(data)
  })
  .catch(err => console.log(err))
});

module.exports = router;
