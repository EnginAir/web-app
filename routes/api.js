const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;

const Wifi = require('../lib/models/wifi');
const Airport = require('../lib/models/airport');
const CorrelatedFlight = require('../lib/models/correlatedFlight');

function filterEmpty(args) {
    for(let arg in args) {
        if(args.hasOwnProperty(arg)) {
            if(arg === "_id" && args._id !== "") {
                args[arg] = new ObjectId(args[arg]);
            }
            if (args[arg] === "") {
                delete args[arg];
            } else if(args[arg] instanceof Array) {
                let shouldDelete = true;
                for(let meme of args[arg]) {
                    if(meme !== "") {
                        shouldDelete = false;
                        break;
                    }
                }
                if(shouldDelete) {
                    delete args[arg];
                }
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


router.get('/no_wifi_airport', function (req, res, next) {
    if(req.query === undefined) {
        req.query = {};
    }
    Airport.find({IATA: req.query.iata}).
    then(ap => {
        console.log("FOUND AIRPORT: " + ap[0]._id);

  //      CorrelatedFlight.index({landingPoint:"2dsphere"});

        CorrelatedFlight.collection.getIndexes({full: true}).then(indexes => {
            console.log("indexes:", indexes);
            // ...
        }).catch(console.error);

        CorrelatedFlight.find({
            landingPoint: {
                $nearSphere: {
                    $maxDistance: 16100,
                    $geometry: {
                        type: "Point",
                        coordinates: ap[0].location.geometry
                    }
                }
            }}).find((error, results) => {
            if (error){
                console.log(error);
            }
            else{
                console.log(results[0])
            }

        });
    });

    console.log("REQ IATA: " + req.query.iata);
    //console.log("FOUND AIRPORT: " + ap[0].IATA);

    res.json({});
});


router.get('/no_wifi_aircraft', function (req, res, next) {

});

router.get('/dead_edg', function (req, res, next) {

});

router.get('/wap_change', function (req, res, next) {

});

module.exports = router;
