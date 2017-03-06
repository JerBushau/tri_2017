'use strict'

var navLinks = document.querySelectorAll('nav a');
var subNavLinks = document.querySelectorAll('.sub-nav a');
var exits = document.querySelectorAll('.exit');
var fadeDur = 700;

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', navHandler);
}

for (let i = 0; i < subNavLinks.length; i++){
  subNavLinks[i].addEventListener('click', subNavHandler);
}

for (let i = 0; i < exits.length; i++) {
  exits[i].addEventListener('click', exitHandler);
}

function navHandler(e) {
  var linkText = e.target.textContent;
  var serviceOverlay = document.querySelector('section.service');
  var installOverlay = document.querySelector('section.installation');
  var contactOverlay = document.querySelector('section.contact');

  e.preventDefault();
  
  if (e.target.className === 'active bb') {
    return 
  }

  if (linkText === 'Service') {
    
    Velocity(serviceOverlay, 'fadeIn', {
      duration: fadeDur,
      display: 'flex'
    });

  } else if (linkText === 'Installation') {

    Velocity(installOverlay, 'fadeIn', {
      duration: fadeDur,
      display: 'flex'
    });;

  } else if (linkText === 'Contact') {

    Velocity(contactOverlay, 'fadeIn', {
      duration: fadeDur,
      display: 'flex'
    });
  }
}

function subNavHandler(e) {
  var currentSection = e.target.parentElement.parentElement;

  if (e.target.className === 'active bb') {
    return 
  }

  Velocity(currentSection, 'fadeOut', {
    duration: fadeDur
  });
}

function exitHandler(e) {
  var currentSection = e.target.parentElement;

  Velocity(currentSection, 'fadeOut', {
    duration: fadeDur
  });
}
