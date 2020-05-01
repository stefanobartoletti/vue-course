<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <div id="data">Another Div</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false,
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            confirm('Are you sure?') ? next() : next(false);
        }
    },
}
</script>