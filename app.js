new Vue({
    el: '#app',

    data: {

        title: 'Hello World!',
        link: 'https://www.google.com',
        fullLink: '<a href="https://www.google.com" target="_blank">Google</a>',

        counter: 0,
        counter2: 0,

        x: 0,
        y: 0,

        name: 'Stefano',

    },

    computed: {

      output: function() {
        console.log('Computed');
        return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
      }


    },

    methods: {

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