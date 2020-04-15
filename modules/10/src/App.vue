<template>
    <div class="container">
        <app-new-quote @quoteAdded="newQuoteAdded"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    <p>Info: click on a quote to delete it</p>
                </div>
            </div>
        </div>
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
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
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
