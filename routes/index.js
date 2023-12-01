var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS', body: "1st Dec 10:40 PM" });
});

module.exports = router;
