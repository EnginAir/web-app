const express = require('express');
const router = express.Router();
const wifi = require('../lib/models/wifi');
const mongoose = require('mongoose');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('pages/pilot/home.ejs', { title: 'CEUSS - Pilot Home' });
});


router.get('/wifi_config', async function(req, res, next) {
    if (err) throw err;
    wifi.find({}, function(err, users) {
        res.render('pages/pilot/wifi_config.ejs', { title: 'CEUSS - Wifi Configuration', Users: users});
    });
});



router.get('/wifi_sim', function(req, res, next) {
    res.render('pages/pilot/wifi_sim.ejs', { title: 'CEUSS - Wifi Simulator' });
});

module.exports = router;
