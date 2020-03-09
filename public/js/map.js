
function renderPilot() {
    window.location.replace('/pilot');
}

function renderTechnician() {
    window.location.replace('/technician');
}

var map;

function initMap() {

    // Setting bounds to only United States
    var maxBounds = [
        [30.9149, -126.1542], //Southwest
        [47.6512, -62.9956]  //Northeast
    ];

    // Creating the map object
    map = new L.map('map', {
        'center': [0, 0],
        'zoom': 30,
        'maxBounds': maxBounds
    }).fitBounds(maxBounds);

    // Creating a Layer object
    var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    L.control.scale().addTo(map);

}

initMap();


var correlatedFlights = [];


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');

    div.innerHTML += '<i class="legendIcon" style="background: #4CBB17"></i>Succesful Upload<br><br>';
    div.innerHTML += '<i class="legendIcon" style="background: yellow"></i>Pending Upload<br><br>';
    div.innerHTML += '<i class="legendIcon" style="background: red"></i>Failed Upload<br><br>';
    div.innerHTML += '<i class="legendIcon" style="background: radial-gradient(#70FF00, #FF0000);"></i>WiFi Access Point';


    return div;
};

legend.addTo(map);





/* MARKER ICONS */
var greenIcon = {
    radius: 6.0,
    fillColor: '#4CBB17',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.8, 'className': 'successUpload'
};
var yellowIcon = {
    radius: 6.0,
    fillColor: 'yellow',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.8, 'className': 'pendingUpload'
};
var redIcon = {
    radius: 6.0,
    fillColor: 'red',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.8, 'className': 'failedUpload'
};
var whiteIcon = {
    radius: 6.0,
    fillColor: '#f8f8ff',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.8
};
var blueIcon = {
    radius: 6.0,
    fillColor: '#0000FF',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.6
};



var wifiData = {
    max: 800,
    data: []
};

var cfg = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    // if scaleRadius is false it will be the constant radius used in pixels
    // "radius": .005,
    "maxOpacity":.3,
    // scales the radius based on map zoom
    "scaleRadius": false,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": false,
    // which field name in your data represents the latitude - default "lat"
    //latField: 'uploadLocation.latitude',
    // which field name in your data represents the longitude - default "lng"
    //lngField: 'uploadLocation.longitude',
    // which field name in your data represents the data value - default "value"
    valueField: 'radius',

    gradient: {
        0.0: "rgb(255, 0, 0)",
        0.1: "rgb(255, 0, 0)",
        0.2: "rgb(250, 101, 0)",
        0.3: "rgb(250, 101, 0)",
        0.4: "rgb(243, 129, 0)",
        0.5: "rgb(232, 154, 0)",
        0.6: "rgb(217, 177, 0)",
        0.7: "rgb(199, 198, 0)",
        0.8: "rgb(178, 218, 0)",
        0.9: "rgb(150, 237, 0)",
        1.0: "rgb(112, 255, 0)"
    },
    blur: .3
};



$(window).on("resize", function () {
    $("#map").height($(window).height() - 138);
    map.invalidateSize();
}).trigger("resize");

