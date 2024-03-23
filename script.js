'use strict';

// https://codepen.io/robee/pen/EWKZjz

var doughover = document.getElementById('nav-doug');
var dougshow = document.getElementById('index-doug');
var micrositehover = document.getElementById('nav-microsite');
var micrositeshow = document.getElementById('index-microsite');

doughover.addEventListener("mouseenter", function(event) {
  dougshow.style.display = 'block';
});

doughover.addEventListener("mouseout", function(event) {
  dougshow.style.display = 'none';
});


micrositehover.addEventListener("mouseenter", function(event) {
  micrositeshow.style.display = 'block';
});

micrositehover.addEventListener("mouseout", function(event) {
  micrositeshow.style.display = 'none';
});