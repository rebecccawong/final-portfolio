'use strict';

// https://codepen.io/robee/pen/EWKZjz

var doughover = document.getElementById('nav-doug');
var dougshow = document.getElementById('index-doug');
var micrositehover = document.getElementById('nav-microsite');
var micrositeshow = document.getElementById('index-microsite');
var rebrandinghover = document.getElementById('nav-rebranding');
var rebrandingshow = document.getElementById('index-rebranding');

// INDEX DOUGLAS ROYALS
doughover.addEventListener("mouseenter", function(event) {
  dougshow.style.display = 'block';
  console.log('Douglas Royals content showing');
});

doughover.addEventListener("mouseout", function(event) {
  dougshow.style.display = 'none';
  console.log('Douglas Royals content not showing');
});

// INDEX MICROSITE
micrositehover.addEventListener("mouseenter", function(event) {
  micrositeshow.style.display = 'block';
  console.log('Microsite content showing');
});

micrositehover.addEventListener("mouseout", function(event) {
  micrositeshow.style.display = 'none';
  console.log('Microsite content not showing');
});