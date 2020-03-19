new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://www.google.com',
        fullLink: '<a href="https://www.google.com" target="_blank">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
    },
    methods: {
      sayHello: function() {
        this.title = 'Hello!'
        return  'The title is ' + this.title;
      },
      increase: function(step) {
        this.counter += step;
      },
      updateCoordinates: function(event) {
        this.x = event.clientX;
        this.y = event.clientY;
      },
      alertMe: function() {
        alert('Alert!')
      }
    }
});