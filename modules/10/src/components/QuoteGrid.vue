<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{quote}}</app-quote> <!-- '.native' method reacts to events on the root element of a component -->
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        props: ['quotes'],
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        },
        components: {
            appQuote: Quote,
        }
    }
</script>

<style>

</style>