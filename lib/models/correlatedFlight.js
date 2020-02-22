const mongoose = require('mongoose');
const LatLong = require('./latLong');

const correlatedFlightSchema = new mongoose.Schema({
        className: String,
        tailNumber: String,
        landingPoint: [LatLong],
        takeoffPoint: [LatLong],
        landingDate: Date,
        flightPath: [LatLong],
        outcome: String
    },
    {
        collection: 'CorrelatedFlight'
    }
);
correlatedFlightSchema.plugin(require('mongoose-paginate'));
const CorrelatedFlight = mongoose.model('CorrelatedFlight', correlatedFlightSchema);
module.exports = CorrelatedFlight;



