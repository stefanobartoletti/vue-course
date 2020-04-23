<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-show="show">This is some info</div> <!-- transitions can be used with bot "v-if" and "v-show" -->
                </transition> 
                <transition name="slide" type="animation"> <!-- "type" can be "animation" or "transition" and is use dto let Vue know where to look for animation duration, if both "transition" and "animation" are used in the CSS -->
                    <div class="alert alert-danger" v-if="show">This is some info</div>
                </transition> 
                <transition name="fade" appear> <!-- "appear" triggers the animation on the initial render of the element (usually when the DOM loads) -->
                    <div class="alert alert-success" v-if="show">This is some info</div>
                </transition> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
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
        transition: opacity 1000ms;
    }
    .fade-leave {
        /* opacity: 1; default value, not necessary */
    }
    .fade-leave-active {
        opacity: 0;
        transition: opacity 1000ms;
    }

    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1000ms ease-in-out forwards;
        transition: opacity 1000ms;
    }
    .slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 1000ms ease-in-out forwards;
        opacity: 0;
        transition: opacity 1000ms;
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
