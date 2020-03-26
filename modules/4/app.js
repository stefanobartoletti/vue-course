new Vue({

    el: '#app',

    data: { 
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,


    },

    computed: { 


    },

    watch: { 


    },

    methods: { 
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }


    }
    
});