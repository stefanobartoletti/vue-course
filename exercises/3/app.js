new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function () {
            return this.value == 37 ? 'Done' : 'Not there yet';
        }
    },
    watch: {
        result: function (value) {
            var vm = this;
            setTimeout(function () {
                vm.value = 0;
            }, 5000);
        }
    },
});