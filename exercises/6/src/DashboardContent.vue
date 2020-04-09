<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <server-list></server-list>
        </div>
        <div class="col-xs-12 col-sm-6">
            <server-details></server-details>
        </div>
    </div>
</template>

<script>
  import ServerList from './ServerList.vue'  
  import ServerDetails from './ServerDetails.vue'  
  export default {
    components: {
        'server-list': ServerList,
        'server-details': ServerDetails,
    }
  }
</script>

<style>

</style>