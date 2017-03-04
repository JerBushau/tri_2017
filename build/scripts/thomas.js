'use strict'

$('nav a').on('click', navHandler);
$('.sub-nav a').on('click', function (e) {
  var currentSection = e.target.parentElement.parentElement;
  if (e.target.className === 'active') {
    return 
  }
  
  $(currentSection).fadeOut(700);
})

$('.exit').on('click', exitHandler);

function navHandler(e) {
  var linkText = e.target.textContent;
  var $serviceOverlay = $('section.service');
  var $installOverlay = $('section.installation');
  var $contactOverlay = $('section.contact');

  e.preventDefault();
  
  if (e.target.className === 'active') {
    return 
  }

  if (linkText === 'Service') {
    
    // css & hide used to fadeIn flex instead of block
    $serviceOverlay.css("display", "flex").hide().fadeIn(700);

  } else if (linkText === 'Installation') {

    $installOverlay.css("display", "flex").hide().fadeIn(700);

  } else if (linkText === 'Contact') {

    $contactOverlay.css("display", "flex").hide().fadeIn(700);
  }
}

function exitHandler(e) {
  var target = e.target;
  var currentSection = target.parentElement;

  $(currentSection).fadeOut();
}
