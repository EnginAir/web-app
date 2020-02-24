const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

const Wifi = require('../lib/models/wifi');
const CorrelatedFlight = require('../lib/models/correlatedFlight');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({version: "v1"});
});

router.get('/wifi', function (req, res, next) {
    if (req.query.ssid) {

    } else if (req.query.airportCode) {

    } else {
        Wifi.paginate({}, {page: req.query.page ? req.query.page : 1, limit: 20}, function (err, doc) {
            if (err) {
                throw err;
            }
            res.json(doc.docs);
        });
    }
});

router.get('/correlatedFlight', function (req, res, next) {
    if (req.query.tailNumber) {

    } else if (req.query.outcome) {

    } else {
        CorrelatedFlight.paginate({}, {page: req.query.page ? req.query.page : 1, limit: 20}, function (err, doc) {
            if (err) {
                throw err;
            }
            res.json(doc.docs);
        });
    }
});

router.post('/add_wifi', function (req, res, next) {
    console.log(req.body.ssid);
    console.log(req.body.wifiPassword);

    var wifi = new Wifi({
        ssid: req.body.ssid,
        password: req.body.wifiPassword,
        airportCode: req.body.airportCode,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });
    wifi.save(function (err, wifiSaved) {
        if (err) return console.error(err);
        console.log(wifiSaved.ssid + " saved to wifi collection.");
    });

    res.status(301).redirect('/pilot/wifi_config');

});

router.delete('/delete_wifi', function (req, res, next) {

    Wifi.remove({_id: req.query.mongoID}, function (err) {
        if (err) {
            res.status(500);
            res.json({error: err});
        } else {
            res.json({});
        }
    });

});

router.patch('/update_wifi', function (req, res, next) {

    console.log("The MangoID " + req.query.mongoID);

    Wifi.findByIdAndUpdate({_id: req.query.mongoID}, {
        ssid: req.query.ssid,
        password: req.query.password,
        airportCode: req.query.airportCode,
        latitude: req.query.latitude,
        longitude: req.query.longitude
    }, function (err, result) {
        if (err) {
            res.status(500);
            res.json({error: err});
        } else {
            res.json({});
        }
    });
});

module.exports = router;
