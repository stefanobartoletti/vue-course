var externalData = {
  title: 'The VueJS Instance',
  showParagraph: false
};

var vm1 = new Vue({
  // el: '#app1',
  data: externalData, // it is possible to access external data and use it from within Vue
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test button';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1') // Mount the Vue instance to the selector; alternative to 'el:', useful when the element it is not yet known or if it needs to be created later.

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second VueJS Instance',
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed title from Vue 2!' // access code from another Vue instance
    }
  }

});

setTimeout( function() {
  vm1.title = 'Changed by timer!'; // access code frou outside a Vue instance
  vm1.show();
}, 3000)

var vm3 = new Vue({
  template: '<h1>Hello!</h1>',
});

vm3.$mount('#app3');