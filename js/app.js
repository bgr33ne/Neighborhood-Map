var initialMarkers = [
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

  //pass info from initial objects and api into this area later to setup mvvm
  var marker = new google.maps.Marker({
    draggable: true,
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    map: map,
    title: 'Hello World!'
  });
  //listener that opens window and bounces marker when clicked
  marker.addListener('click', function() {
    toggleBounce;
    infowindow.open(map, marker);
  });


  //adds animation if you click the marker

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  };

  //adding content into marker windows

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Carnegie Hall</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
  });

  // We add a DOM event here to show an alert if the DIV containing the
  // map is clicked.
  google.maps.event.addDomListener(mapDiv, 'click', function() {
    console.log('Map was clicked!');
  });

}
