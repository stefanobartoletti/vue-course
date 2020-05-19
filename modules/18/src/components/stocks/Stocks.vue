<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import appStock from './Stock.vue'

    export default {
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        },
        components: {
            appStock,
        },
    }
</script>

<style  scoped>

</style>