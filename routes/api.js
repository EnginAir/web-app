const express = require('express');
const router = express.Router();


const Wifi = require('../lib/models/wifi');
const CorrelatedFlight = require('../lib/models/correlatedFlight');

function filterEmpty(args) {
    for(let arg in args) {
        if(args.hasOwnProperty(arg)) {
            if (args[arg] === "") {
                delete args[arg];
            }
        }
    }
    return args;
}

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({version: "v1"});
});

router.get('/wifi', function (req, res, next) {
    if(req.query === undefined) {
        req.query = {};
    }
    let page = req.query.page;
    req.query.page = undefined;
    Wifi.paginate(filterEmpty(req.query), {page: page ? page : 1, limit: 20}, function (err, doc) {
        if (err) {
            throw err;
        }
        res.json(doc.docs);
    });
});

router.post('/add_wifi', function (req, res, next) {
    console.log(req.body.ssid);
    console.log(req.body.wifiPassword);

    let wifi = new Wifi({
        ssid: req.body.ssid,
        password: req.body.wifiPassword,
        airportCode: req.body.airportCode,
        latLong: {
            type: "point",
            geometry: [req.body.latitude, req.body.longitude]
        },
        range: 93
    });

    console.log("Wifi Range: " + wifi.range);
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

router.get('/correlated_flight', function (req, res, next) {
    if(req.query === undefined) {
        req.query = {};
    }
    let page = req.query.page;
    let limit = parseInt(req.query.limit);
    delete req.query.page;
    delete req.query.limit;
    CorrelatedFlight.paginate(filterEmpty(req.query), {page: page ? page : 1, limit: limit ? limit : 20}, function (err, doc) {
        if (err) {
            throw err;
        }
        res.json(doc.docs);
    });
});

module.exports = router;
