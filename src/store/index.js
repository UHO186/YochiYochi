import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import auth from "./auth/auth";
import community from "./Community/community";
import qna from "./Qna/qna";
import game from "./game/game";

const store = createStore({
  state: {
    rootState: "aaa",
  },
  mutations: {
    rootState(state, payload) {
      state.rootState = payload;
    },
  },
  getters: {
    rootState(state) {
      return state.rootState;
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
