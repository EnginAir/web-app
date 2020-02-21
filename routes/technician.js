var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/technic/home.ejs', { title: 'CEUSS - Technician Home' });
});
router.get('/upload_status', function(req, res, next) {
  res.render('pages/technic/upload_status.ejs', { title: 'CEUSS - Technician Upload Status' });
});
router.get('/wifi_config', function(req, res, next) {
  res.render('pages/technic/wifi_config.ejs', { title: 'CEUSS - Technician WiFi Config' });
});
router.get('/wifi_sim', function(req, res, next) {
  res.render('pages/technic/wifi_sim.ejs', { title: 'CEUSS - Technician WiFi Simulation' });
});
module.exports = router;
