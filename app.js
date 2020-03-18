new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://www.google.com',
        fullLink: '<a href="https://www.google.com" target="_blank">Google</a>',
        counter: 0,
    },
    methods: {
      sayHello: function() {
        this.title = 'Hello!'
        return  'The title is ' + this.title;
      },
      increase: function() {
        this.counter++;
      }
    }
});