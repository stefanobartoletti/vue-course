<template>
    <div>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';
    export default {
        mixins: [ fruitMixin ],
        created() {
            console.log('Created (list component)')
        }    
    }
</script>

<style>

</style>
