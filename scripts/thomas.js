'use strict'

// watch for scroll
$(window).scroll(function() {

  // if user is near top of page no back to top btn 
  if ($(this).scrollTop() < 100) {
    $('.b2t').addClass('invisible');
  // else yes back to top btn
  } else if ($(this).scrollTop() > 100) {
    $('.b2t').removeClass('invisible');
  }

  // if user is not at top of page nav has bg
  if ($(this).scrollTop()) {
    $('.main-nav').removeClass('invisible'); 
  // else user is at top nav does not have bg
  } else {
    $('.main-nav').addClass('invisible');
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
