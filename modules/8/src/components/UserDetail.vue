<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reverseName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name (event)</button>
        <button @click="resetFn()">Reset Name (callback)</button>
    </div>
</template>

<script>
    export default {
        props: { // 'props' gets data from parent item, passed with v-bind
            myName: {
                type: String, // Validate data by accepting only selected type
                required: true,
            },
            resetFn: Function,
            userAge: Number,
        },
        methods : {
            reverseName() {
                return this.myName.split('').reverse().join(''); // props can be used like data in functions
            },
            resetName() {
                this.myName = 'Bilbo';
                this.$emit('nameWasReset', this.myName); // emits a custom event to pass the new value to the parent 
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
