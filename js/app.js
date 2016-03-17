var initialMap = [
  {
    name: 'Carnegie Hall',
    lat: 40.765353,
    lon: -73.979924
  }
];

var Map = function(data) {
    this.name = ko.observable(data.name);
    this.lat = ko.observable(data.lat);
    this.lon = ko.observable(data.long);
};

var ViewModel = function() {
  var self = this;

  //grabs the search data
  var search = this.query().toLowerCase();
  console.log('Search query: ' + search);

  this.mapList = ko.observableArray([]);

  initialMap.forEach(function(mapItem) {
    self.mapList.push( new Map(mapItem) );
  });

  ko.applyBindings(viewModel);

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

  //pass info from initial objects and api into this area
  var marker = new google.maps.Marker({
    draggable: true,
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    map: map,
    title: 'Hello World!'
  });
  marker.addListener('click', toggleBounce);

  //adds animation if you click the marker

  function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

  // We add a DOM event here to show an alert if the DIV containing the
  // map is clicked.
  google.maps.event.addDomListener(mapDiv, 'click', function() {
    console.log('Map was clicked!');
  });

}
