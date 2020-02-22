const express = require('express');
const router = express.Router();

const Wifi = require('../lib/models/wifi');
const CorrelatedFlight = require('../lib/models/correlatedFlight');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({version: "v1"});
});

router.get('/wifi', function(req, res, next) {
    if(req.query.ssid) {

    } else if(req.query.airportCode) {

    } else {
        Wifi.paginate({}, {page: req.query.page ? req.query.page : 1, limit: 20}, function (err, doc) {
            if(err) {
                throw err;
            }
            res.json(doc.docs);
        });
    }
});

router.get('/correlatedFlight', function(req, res, next) {
    if(req.query.tailNumber) {

    } else if(req.query.outcome) {

    } else {
        CorrelatedFlight.paginate({}, {page: req.query.page ? req.query.page : 1, limit: 20}, function (err, doc) {
            if(err) {
                throw err;
            }
            res.json(doc.docs);
        });
    }
});

module.exports = router;
