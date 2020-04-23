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
                <transition name="slide">
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
        opacity: 0;
    }
    .fade-enter-active {
        /* opacity: 1; default value, not necessary */
        transition: opacity 500ms;
    }
    .fade-leave {
        /* opacity: 1; default value, not necessary */
    }
    .fade-leave-active {
        opacity: 0;
        transition: opacity 500ms;
    }

    .slide-enter {

    }
    .slide-enter-active {
        animation: slide-in 500ms ease-in-out forwards;
    }
    .slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 500ms ease-in-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }

</style>
