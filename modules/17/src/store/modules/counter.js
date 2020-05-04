const state = {
    counter: 0,
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    },
};

const actions = {
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
};

export default {
    state,
    getters,
    mutations,
    actions
}