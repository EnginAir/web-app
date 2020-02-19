
// TODO: Find better place for render page functions
function renderPilot() {
    window.location.replace('pilot_home.html');
}

function renderTechnician() {
    window.location.replace('index.html');
}

function initMap() {

    // Setting bounds to only United States
    var maxBounds = [
        [30.9149, -126.1542], //Southwest
        [47.6512, -62.9956]  //Northeast
    ];

    // Creating the map object
    var map = new L.map('map', {
        'center': [0, 0],
        'zoom': 30,
        'maxBounds': maxBounds
    }).fitBounds(maxBounds);

    // Creating a Layer object
    var layer = new L.TileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png').addTo(map);



}



initMap();





