const mongoose = require('mongoose');
const latLong = new mongoose.Schema({
    type: String,
    geometry: [Number]
});

module.exports = {schema: latLong};
