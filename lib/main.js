'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



var app = new Vue({
  el: '#app',
  data: {
    seenHome: true,
    seenAbout: false
  },
  methods: {
    home: function home() {
      app2.seenHome = true;
      app2.seenAbout = false;
      app2.seenCareer = false;
    },
    about: function about() {
      app2.seenHome = false;
      app2.seenAbout = true;
      app2.seenCareer = false;
    },
    careers: function careers() {
      app2.seenHome = false;
      app2.seenAbout = false;
      app2.seenCareer = true;
    }
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    seenHome: true,
    seenAbout: false,
    seenCareer: false
  }
});

// var app3 = new Vue({
//   el: '#app-3',
//   data: {

//   }
// })