var initialLocations = [
  {
    name: 'Carnegie Hall',
    lat: 40.765353,
    lon: -73.979924
  }
];


var ViewModel = function() {

};

function initMap() {

  //move these into the initial objects and pass into function
  var myLatLng = {lat: 40.765353, lng: -73.979924};

  console.log('new map coming!');
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });

  // We add a DOM event here to show an alert if the DIV containing the
  // map is clicked.
  google.maps.event.addDomListener(mapDiv, 'click', function() {
    window.alert('Map was clicked!');
  });

}
