var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS', body: "Test Me Test 2:10 PM" });
});

module.exports = router;
