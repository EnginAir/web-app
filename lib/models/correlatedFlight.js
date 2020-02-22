const mongoose = require('mongoose');
const LatLong = require('./latLong');

const correlatedFlightSchema = new mongoose.Schema({
        className: String,
        tailNumber: String,

        landingPoint: LatLong.schema,

        takeoffPoint: LatLong.schema,
        landingDate: Date,
        flightPath: [LatLong.schema],
        outcome: String
    },
    {
        collection: 'CorrellatedFlight'
    }
);
correlatedFlightSchema.plugin(require('mongoose-paginate'));
const CorrelatedFlight = mongoose.model('CorrellatedFlight', correlatedFlightSchema);
module.exports = CorrelatedFlight;



