'use strict'

$(window).scroll(function() {
  if ($(this).scrollTop() < 225) {
    $('.b2t').css('display', 'none');
  } else {
    $('.b2t').css('display', 'flex');
  }
});

// Google maps api stuff 
function initMap() {
  var uluru = {lat: 38.2847077, lng: -85.7217259};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    scrollwheel: false,
    disableDefaultUI: true,
    center: uluru
  });
  var marker = new google.maps.Circle({
    center: uluru,
    radius: 800 * 125,
    strokeColor: '#1521c5',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.159,
    map: map
  });
}

