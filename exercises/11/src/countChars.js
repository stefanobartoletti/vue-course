export const countChars = {
    computed: {
        countChars() {
            return this.name + " (" + this.name.length + ")";
        }
    }
}