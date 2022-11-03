import { createStore } from "vuex";

export default createStore({
    state: {
        token: "",
    },
    getters: {},
    mutations: {
        set_token(state, token) {
            state.token = token;
            sessionStorage.token = token;
        },
        del_token(state) {
            state.token = "";
            sessionStorage.removeItem("token");
        },
    },
    actions: {},
    modules: {},
});
