import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "../plugins/axios";

import auth from "./auth/auth";
import community from "./Community/community";
import qna from "./Qna/qna";
import game from "./game/game";

const store = createStore({
    state: {
        rootState: "aaa",
        user: null,
    },
    mutations: {
        rootState(state, payload) {
            state.rootState = payload;
        },
        SET_USER(state, user) {
            state.user = user;
        },
    },
    getters: {
        rootState(state) {
            return state.rootState;
        },
        user(state) {
            return state.user;
        },
    },
    actions: {
        async setUser({ commit }) {
            try {
                const response = await axios.get("http://localhost/api/user");
                const user = response.data.name; // 수정된 부분
                console.log('유저', user);
                commit("SET_USER", user);
            } catch (error) {
                console.error(error);
            }
        },
    },
    modules: {
        auth,
        community,
        qna,
        game,
    },
    plugins: [
        createPersistedState({
            paths: ["auth"],
        }),
    ],
});

export default store;
