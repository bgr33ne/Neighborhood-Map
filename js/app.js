var ViewModel = function() {

};

var map;
function initMap() {
  console.log('new map coming!');
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
