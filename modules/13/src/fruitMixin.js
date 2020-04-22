export const fruitMixin = {
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