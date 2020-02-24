
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
        "tailNumber": "42342",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [10.000, 52.0000]
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
        "tailNumber": "323424324",
        "landingPoint":
            {
                "type": "Point",
                "geometry": [55, 92]
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


/* MARKER ICONS */

var greenIcon = {
    radius: 8.0,
    fillColor: '#4CBB17',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.8
};
var yellowIcon = {
    radius: 8.0,
    fillColor: 'yellow',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.8
};
var redIcon = {
    radius: 8.0,
    fillColor: 'red',
    color: '#000',
    weight: 1, opacity: 1, fillOpacity: 0.8
};








