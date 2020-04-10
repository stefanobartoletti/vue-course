<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ reverseName() }}</p>
    </div>
</template>

<script>
    export default {
        props: { // 'props' gets data from parent item, passed with v-bind
            myName: {
                type: String, // Validate data by accepting only selected type
                required: true,
            }
        },
        methods : {
            reverseName() {
                return this.myName.split('').reverse().join(''); // props can be used like data in functions
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
