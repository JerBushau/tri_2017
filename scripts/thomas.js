'use strict'

$('nav').on('click', linkHandler);

$('.exit').on('click', exitHandler);

function linkHandler(e) {
  var linkText = e.target.textContent;
  var $serviceOverlay = $('section.service');
  var $installOverlay = $('section.install');
  var $contactOverlay = $('section.contact');

  e.preventDefault();
  
  if (linkText === 'Service') {
    
    // css & hide used to fadeIn flex instead of block
    $serviceOverlay.css("display", "flex").hide().fadeIn();

  } else if (linkText === 'Installation') {

    $installOverlay.css("display", "flex").hide().fadeIn();

  } else if (linkText === 'Contact') {

    $contactOverlay.css("display", "flex").hide().fadeIn();
  }
}

function exitHandler(e) {
  var $parent = $(e.target.parentElement);
  
  $parent.fadeOut();
}
