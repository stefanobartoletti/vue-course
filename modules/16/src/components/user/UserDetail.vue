<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ id }}</p>
        <router-link 
            tag="button"
            class="btn btn-primary"
            :to="linkTo"
        >Edit User</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            linkTo: { 
                name: 'userEdit',
                query: {locale: 'en', q: 100},
                hash: '#data'
            }
        }
    },
    props: {
        id: {
            type: Number,
            default: 1,
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('Inside component beforeRouteEnter')
        next();
    },
}
</script>