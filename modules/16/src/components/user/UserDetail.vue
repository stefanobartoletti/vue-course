<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ id }}</p>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 1,
        }
    }
}
</script>