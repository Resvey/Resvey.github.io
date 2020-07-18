document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

var app = new Vue({
  el: '#app',
  data: {
    seenHome: true , 
    seenAbout: false
  },
  methods: {
    home: function () {
      app2.seenHome = true ;
      app2.seenAbout = false ;
      app2.seenCareer = false ;
    },
    about: function () {
      app2.seenHome = false ;
      app2.seenAbout = true  ; 
      app2.seenCareer = false ;
    },
    careers: function () {
      app2.seenHome = false ;
      app2.seenAbout = false ;
      app2.seenCareer = true ;
    }
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    seenHome: true,
    seenAbout: false,
    seenCareer: false
  }
})

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
    
//   }
// })