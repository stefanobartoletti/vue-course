<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ id }}</p>
        <router-link 
            tag="button"
            class="btn btn-primary"
            :to="{ name: 'userEdit' }"
        >Edit User</router-link>
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