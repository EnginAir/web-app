var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/pilot/home.ejs', { title: 'CEUSS - Pilot Home' });
});
router.get('/wifi_config', function(req, res, next) {
  res.render('pages/pilot/wifi_config.ejs', { title: 'CEUSS - Wifi Configuration' });
});
router.get('/wifi_sim', function(req, res, next) {
  res.render('pages/pilot/wifi_sim.ejs', { title: 'CEUSS - Wifi Simulator' });
});

module.exports = router;
