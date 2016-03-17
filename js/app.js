var initialLocations = [
  {
    name: 'Carnegie Hall',
    lat: 40.765353,
    lon: -73.979924
  }
];


var ViewModel = function() {

};

var map;
function initMap() {
  console.log('new map coming!');
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(40.765353, -73.979924),
    zoom: 15
  });

  // We add a DOM event here to show an alert if the DIV containing the
  // map is clicked.
  google.maps.event.addDomListener(mapDiv, 'click', function() {
    window.alert('Map was clicked!');
  });

}
