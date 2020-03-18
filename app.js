new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://www.google.com'
    },
    methods: {
      changeTitle: function(event) {
        this.title = event.target.value;
      },
      sayHello: function() {
        return  'The title is ' + this.title;
      }
    }
});