import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state => {
            return state.value;
        }
    },
    // mutations are always synchronous, it is not possible to use async tasks like i.e. setTimeout() or reaching out to a server.
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    // actions are used to perform async tasks before commiting data to mutations; it is a best practice to always use actions, instead of directly mutations, from components
    actions: {
        increment: (context, payload) => {
            context.commit('increment', payload);
        },
        decrement: ({ commit }, payload) => { // alt syntax to use a single method from context object
            commit('decrement', payload);
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            }, payload.duration)
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration)
        },
        updateValue: ({ commit }, payload)  => {
            commit('updateValue', payload);
        }
    }
});