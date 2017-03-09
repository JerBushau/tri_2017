'use strict'

// Sticky nav
$('.main-nav').sticky({topSpacing: 0});

// Smooth scroll to anchors
$('.scroll').on('click', function(e) {     
  e.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top - 34}, 400);

  $(e.target).blur()
});

// Show/hide back to top button
$('.main-nav').on('sticky-start', function() {
  $('.b2t').css('display', 'inline-block');
});

$('.main-nav').on('sticky-end', function() {
  $('.b2t').css('display', 'none');
});

// Smooth scroll back to top 
$('.b2t').on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);

  $(e.target).blur()
});
