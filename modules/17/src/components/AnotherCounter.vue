<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 1000})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
            
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