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
wifiSchema.plugin(require('mongoose-paginate'));
const wifi = mongoose.model('Wifi', wifiSchema);
wifi.schema = wifiSchema;
module.exports = wifi;