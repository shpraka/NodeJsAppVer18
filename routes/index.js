var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS', body: "4th Dec 2:56 PM" });
});

module.exports = router;
