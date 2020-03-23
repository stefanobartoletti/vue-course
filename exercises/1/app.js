new Vue({
    el: '#exercise',
    data: {
        name: 'Stefano',
        age: 37,
        picLink: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Starfleet_command_emblem.png'
    },
    methods: {
      multiplyAge: function() {
        return  this.age * 3;
      },
      randomFloat: function() {
        return Math.random();
      }
    }
});