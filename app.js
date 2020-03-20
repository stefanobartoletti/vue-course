new Vue({
    el: '#app',  // Connect Vue to DOM

    data: { // Store data (variables) to use in app

        title: 'Hello World!',
        link: 'https://www.google.com',
        fullLink: '<a href="https://www.google.com" target="_blank">Google</a>',

        counter: 0,
        counter2: 0,

        x: 0,
        y: 0,

        name: 'Stefano',

    },

    computed: { // Computed variables (similar to "cached" computed data; run synchronously)

      output: function() {
        console.log('Computed');
        return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
      }

    },

    watch: { // Execute code on data changes (run asynchronously)

      counter: function(value) {
        var vm = this; // must use because callback closure function
        setTimeout( function() {
          vm.counter = 0;
        }, 2000);
      }

    },

    methods: { // Methods  of this Vue instance

      sayHello: function() {
        this.title = 'Hello!'
        return  'The title is ' + this.title;
      },

      result: function() {
        console.log('Method');
        return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
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