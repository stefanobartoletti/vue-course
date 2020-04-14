<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedTemplate = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedTemplate = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedTemplate = 'appRed'">Load Red Template</button>
                <span class="btn btn-transparent normalcursor">Selected Template: {{selectedTemplate}}</span>
                <hr>
                <keep-alive>
                    <component :is="selectedTemplate">
                        <h2 slot="title">This is {{ selectedTemplate }}</h2>
                        <p>A wonderful quote!</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedTemplate: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style scoped>

    .normalcursor {
        cursor: default !important;
    }

</style>
