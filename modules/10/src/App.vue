<template>
    <div class="container">
        <app-new-quote @quoteAdded="newQuoteAdded"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid  from './components/QuoteGrid.vue';
    import NewQuote  from './components/NewQuote.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    'Placeholder quote',
                ],
                maxQuotes: 10,
            }
        },
        methods: {
            newQuoteAdded(quote) {
                this.quotes.push(quote);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
        }
        
    }
</script>

<style>
</style>
