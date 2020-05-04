<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER,
            })
        },
        
        // computed: {
        //     ...mapGetters([
        //         'doubleCounter',
        //         'stringCounter',
        //     ])
        // },
        
        // it is also possible to map getter to different names with an object
        // computed: mapGetters({
        //     counter: 'doubleCounter',
        //     clicks: 'stringCounter',
        // })



        // computed: {
        //     counter() {
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.getters.stringCounter;
        //     }
        // }
    }
</script>