const mongoose = require('mongoose');
const LatLong = require('./latLong');

const wifiSchema = new mongoose.Schema({
        ssid: String,
        password: String,
        airportCode: String,
        latLong: LatLong.schema,
        range: Number
    },
    {
        collection: 'Wifi'
    }
);
wifiSchema.plugin(require('mongoose-paginate'));
const wifi = mongoose.model('Wifi', wifiSchema);
wifi.schema = wifiSchema;
module.exports = wifi;