var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bussiness1', function(req, res, next) {
  res.render('business1');
});

module.exports = router;
