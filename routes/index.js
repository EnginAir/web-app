var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'CEUSS - Home' });
});

/* GET flights page. */
router.get('/technic_flights', function(req, res, next) {
  res.render('pages/technic_flights', { title: 'Express' });
});

/* GET upload status page. */
router.get('/technic_upload_status', function(req, res, next) {
  res.render('pages/technic_upload_status', { title: 'Express' });
});

/* GET wifi configuration page. */
router.get('/technic_wifi_config', function(req, res, next) {
  res.render('pages/technic_wifi_config', { title: 'Express' });
});

/* GET wifi simulation page. */
router.get('/technic_wifi_sim', function(req, res, next) {
  res.render('pages/technic_wifi_sim', { title: 'Express' });
});

/* GET database page. */
router.get('/technic_database_table', function(req, res, next) {
  res.render('pages/technic_database_table', { title: 'Express' });
});

/* GET diagnostic test page. */
router.get('/technic_database_diagnostic_test', function(req, res, next) {
  res.render('pages/technic_database_diagnostic_test', { title: 'Express' });
});

/* GET pilot home page. */
router.get('/pilot_home', function(req, res, next) {
  res.render('pages/pilot_home', { title: 'Express' });
});

module.exports = router;
