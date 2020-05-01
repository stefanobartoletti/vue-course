<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions({
                increment: 'asyncIncrement',
                decrement: 'asyncDecrement'
            })
            
    // mapped actions can be passed data when they are used


    // import { mapMutations } from 'vuex';
    // export default {
    //     methods: {
    //         ...mapMutations([
    //             'increment',
    //             'decrement'
    //         ])

            // increment() {
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>