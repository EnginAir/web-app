var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/technic/home.ejs', { title: 'CEUSS - Technician Home' });
});

module.exports = router;
