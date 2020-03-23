new Vue({
        el: '#exercise',
        data: {
            value: '',
        },
        methods: {
            alertMe: function() {
                alert('Alert!')
            },
            setKey: function(event) {
                this.value = event.target.value;
            }
        }
    });