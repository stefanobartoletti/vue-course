<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>

                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>

                <br><br>

                <button class="btn btn-primary" @click="show = !show">Show Alert</button>

                <br><br>

                <transition :name="alertAnimation"> <!-- It is possible to bind both "name" and "type" attributes in order to dinamically set them -->
                    <div class="alert alert-info" v-show="show">This is some info</div> <!-- transitions can be used with bot "v-if" and "v-show" -->
                </transition> 

                <transition name="slide" type="animation"> <!-- "type" can be "animation" or "transition" and is used to let Vue know where to look for animation duration, if both "transition" and "animation" are used in the CSS -->
                    <div class="alert alert-danger" v-if="show">This is some info</div>
                </transition> 

                <transition 
                    enter-class=""
                    enter-active-class="animated shake"
                    leave-class=""
                    leave-active-class="animated bounce"
                    appear 
                > <!-- "appear" triggers the animation on the initial render of the element (usually when the DOM loads); "-class" attributes are used to set custom CSS classes instead of the Vue defaults, useful when using external libraries like animate.css -->
                    <div class="alert alert-success" v-if="show">This is some info</div>
                </transition> 

                <transition :name="alertAnimation" mode="out-in"> 
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                    <!-- "key" and "mode" (on parent transition) attributes are used by Vue to correctly transition between more elements -->
                </transition> 

                <hr>

                <button class="btn btn-primary" @click="load = !load">Load / Remove</button>
                <br><br>

                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                > <!-- ':css="false"' binding tells Vue to not detect any CSS transition classes, both custom named or builtin "v-" ones; useful when dealing with Javscript only transitions -->
                    <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
                </transition>

                <hr>

                <button 
                    class="btn btn-primary" 
                    @click="selectedComponent == 'appSuccessAlert' ? 
                    selectedComponent = 'appDangerAlert' : 
                    selectedComponent = 'appSuccessAlert' 
                    ">Toggle Component</button>
                <br><br>

                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>            
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                show: false,
                alertAnimation: 'fade',
                load: true,
                elementWidth: 100,
                selectedComponent: 'appDangerAlert',
            }
        },
        methods: {
            beforeEnter(el) {
                console.log("Before enter hook");
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log("Enter Hook");
                let round = 1;
                const interval = setInterval( () => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
                // the "done" callback is required to tell Vue when the transition is finished; it can be omitted if CSS timings are present;
            },
            afterEnter(el) {
                console.log("After enter hook");
            },
            enterCancelled(el) {
                console.log("Enter cancelled hook");
            },
            beforeLeave(el) {
                console.log("Before leave hook");
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log("Leave Hook");
                let round = 1;
                const interval = setInterval( () => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log("After leave hook");
            },
            leaveCancelled(el) {
                console.log("Leave cancelled hook");
            },
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert,
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
        transition: opacity 2000ms;
    }
    .slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 1000ms ease-in-out forwards;
        opacity: 0;
        transition: opacity 2000ms;
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
