const mongoose = require('mongoose');
const wifiSchema = new mongoose.Schema({
        ssid: String,
        password: String,
        airportCode: String,
        latitude: String,
        longitude: String
    },
    {
        collection: 'Wifi'
    }
);

var wifi = mongoose.model('Wifi', wifiSchema);

module.exports = wifi;