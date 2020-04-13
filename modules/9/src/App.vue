<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <h2>{{ quoteTitle}}</h2>
                    <p>A wonderful quote!</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>

    import Quote from './components/Quote.vue';

    export default {
        data: function() {
            return {
                quoteTitle: 'The Title',
            }
        },
        components: {
            AppQuote: Quote,
        }
        
    }
</script>

<style scoped>
    h2 {
        font-weight: 700;
    }
</style>
