<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h2>Exercise 1</h2>
                <p>{{ name | reverseText }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h2>Exercise 2</h2>
                <p>{{ name | stringLength }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>Exercise 3</h2>
                <p>{{ reverseName }}</p>
                <p>{{ nameCount }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h2>Exercise 4</h2>
                <p>{{ countChars }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { countChars } from './countChars';

    export default {
        data() {
            return {
                name: "Bilbo Baggins"
            }
        },
        filters: {
            reverseText(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reverseName() {
                return this.name.split("").reverse().join("");
            },
            nameCount() {
                return this.name + " (" + this.name.length + ")";
            }
        },
        mixins: [countChars]
    }
</script>

<style>
</style>
