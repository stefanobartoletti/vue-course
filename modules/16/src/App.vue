<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <!-- <app-header></app-header> -->
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header,
        }
    }
</script>

<style>

    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 250ms ease-in-out forwards;
        transition: opacity 250ms;
    }
    .slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 250ms ease-in-out forwards;
        opacity: 0;
        transition: opacity 250ms;
        position: absolute;
    }

    .slide-move {
        transition: transform 250ms;
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
