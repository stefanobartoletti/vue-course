<template>
    <div>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Hello there!',
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: '',
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter( (element) => {
                    return element.match(this.filterText);
                });
            }
        }
    }
</script>

<style>

</style>
