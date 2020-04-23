<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            }
        }
    }
</script>

<style>
    /* Vue automatically adds CSS classes to transitions; if name is not explicitly provided, they are named '.v-enter' and os on  */
    .fade-enter {
    
    }
    .fade-enter-active {

    }
    .fade-leave {
        
    }
    .fade-leave-active {

    }
</style>
