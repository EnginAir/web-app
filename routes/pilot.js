const express = require('express');
const router = express.Router();
const wifi = require('../lib/models/wifi');
const mongoose = require('mongoose');
const app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('pages/pilot/home.ejs', { title: 'CEUSS - Pilot Home' });
});


router.get('/wifi_config', function(req, res, next) {
        res.render('pages/pilot/wifi_config.ejs', { title: 'CEUSS - Wifi Configuration'});
});



router.get('/wifi_sim', function(req, res, next) {
    res.render('pages/pilot/wifi_sim.ejs', { title: 'CEUSS - Wifi Simulator' });
});

router.post('/wifi_config', function (req, res, next) {
    console.log("req " + req.body.ssid);
    res.render('pages/pilot/wifi_config.ejs', { title: 'CEUSS - Wifi Configuration'});

});


module.exports = router;
