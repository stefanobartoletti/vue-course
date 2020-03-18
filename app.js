new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'https://www.google.com'
    },
    methods: {
      sayHello: function() {
        this.title = 'Hello!'
        return  'The title is ' + this.title;
      }
    }
});