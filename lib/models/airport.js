const mongoose = require('mongoose');
const LatLong = require('./latLong');

const airportSchema = new mongoose.Schema({
        _id: mongoose.Schema.ObjectId,
        className: String,
        Name: String,
        City: String,
        Country: String,
        IATA: String,
        Latitude: Number,
        Longitude: Number,
        location: LatLong.schema
    },
    {
        collection: 'Airport'
    }
);
airportSchema.plugin(require('mongoose-paginate'));
const airport = mongoose.model('Airport', airportSchema);
module.exports = airport;