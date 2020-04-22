<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | toLowercase }}</p> <!-- values are filtered with a pipe -->
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';


    export default {
        data() {
            return {
                text: 'Hello there!',
            }
        },
        filters: { // filters are used to modify how data is outputted/displayed, without changing it in the source. Filters are not a great choice from a performance point of view (must load the DOM to be applied), computed  properties are often a better solution
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: List,
        },
        mixins: [ fruitMixin ] // Mixins can be used to externalize code which is common in multiple components, in order to avoid duplication; they can be used together with local data and functions.
    }
</script>

<style>

</style>
