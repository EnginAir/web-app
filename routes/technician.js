var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/technic/home.ejs', { title: 'CEUSS - Technician Home' });
});
router.get('/database_diagnostic_test', function(req, res, next) {
  res.render('pages/technic/database_diagnostic_test.ejs', { title: 'CEUSS - Database Diagnostics' });
});
router.get('/database_table', function(req, res, next) {
  res.render('pages/technic/database_table.ejs', { title: 'CEUSS - Database Table' });
});
module.exports = router;
