<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0,
            }
        },
        destroyed() {
            console.log('"New" was destroyed')
        },
        deactivated() {
            console.log('"New" was deactivated')
        },
        activated() {
            console.log('"New" was activated')
        }
    }
</script>

<style scoped>

</style>