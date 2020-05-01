<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!-- <p>Loaded ID: {{id}}</p> -->
        <button @click="navigateToHome">Go Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id,
    //     }
    // },

    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id;
    //     }
    // },

    // in recent versions of vue-router, route params can be bound to props in the target component, this also eliminates the need to watch $route. 
    // props: {
    //     id: {
    //         type: Number,
    //         default: 1,
    //     }
    // },
    methods: {
        navigateToHome() {
            this.$router.push({name: 'home'});
        }
    }
}
</script>