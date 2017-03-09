'use strict'

// Sticky nav
$('.main-nav').sticky({topSpacing: 0});

// Smooth scroll to anchors
$('.scroll').on('click', function(evt) {     
  evt.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top - 54}, 400);


  $(evt.target).blur()

});
