
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

var fakeData = [
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "A1234",
        "landingPoint":
            {
                "type": "Point",
                "geometry":  [45.3232, -89.9917]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": [39.3232, -92.9917]
            },
        "landingDate": "2016-08",
        "outcome": "SUCCESS_UPLOAD"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "Y6903",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [42.3232, -113.9917]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": [41.3232, -122.9917]
            },
        "landingDate": "2020-02",
        "outcome": "FAIL_NO_LANDING"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "C2304",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [32.3232, -110.9917]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": [42.3232, -77.9917]
            },
        "landingDate": "2017-01",
        "outcome": "FAIL_NO_WIFI_AIRPORT"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "Q1203",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [35.3232, -90.9917]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": [36.3232, -77.9917]
            },
        "landingDate": "2012-11",
        "outcome": "SUCCESS_UPLOAD"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "V2342",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [36, -102.0000]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": [42, 87]
            },
        "landingDate": "1999-10",
        "outcome": "SUCCESS_UPLOAD"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "R32U3",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [43, -99]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": [10, 23.12]
            },
        "landingDate": "2020-02",
        "outcome": "FAIL_NO_LANDING"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "7C6B07",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [40.99497,-90.50808]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": []
            },
        "landingDate": "2013-06",
        "outcome": "FAIL_NO_LANDING"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "7C6B38",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [41.30269,-89.63696]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": []
            },
        "landingDate": "2013-06",
        "outcome": "FAIL_NO_WIFI_AIRCRAFT"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "7C6CA1",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [35.49413,-92.5421]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": []
            },
        "landingDate": "2013-06",
        "outcome": "FAIL_NO_WIFI_AIRPORT"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "C81D9D",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [30.93163,-90.81726]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": []
            },
        "landingDate": "2013-06",
        "outcome": "FAIL_WAP_CHANGED"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "J678Q2",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [25.98585,-79.50659]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": []
            },
        "landingDate": "2013-06",
        "outcome": "FAIL_DEAD_EDG100"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "U5039T",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [36.5183,-119.78081]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": []
            },
        "landingDate": "2013-06",
        "outcome": "SUCCESS_UPLOAD"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "7C6B07",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [45.42079,-120.5783]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": [39.08414,-108.96632]
            },
        "landingDate": "2013-06",
        "outcome": "SUCCESS_UPLOAD"
    },
    {
        "classname": "edu.nau.enginair.models.CorrellatedFlight",
        "tailNumber": "7C6B07",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [45.51285,-102.53274]
            },
        "takoffPoint":
            {
                "type": "Point",
                "geometry": []
            },
        "landingDate": "2013-06",
        "outcome": "SUCCESS_UPLOAD"
    }

];

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
    weight: 1, opacity: 1, fillOpacity: 0.8
};
var yellowIcon = {
    radius: 6.0,
    fillColor: 'yellow',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.8
};
var redIcon = {
    radius: 6.0,
    fillColor: 'red',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.8
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
    "maxOpacity":.2,
    // scales the radius based on map zoom
    "scaleRadius": false,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
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
    blur: 1
};



$(window).on("resize", function () {
    $("#map").height($(window).height() - 153);
    map.invalidateSize();
}).trigger("resize");

