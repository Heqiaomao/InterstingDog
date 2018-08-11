var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Heqiaomao',
    miao: 'hewanying'
  }); //循环读取到的内容
});

module.exports = router;