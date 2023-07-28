import { createStore, CommitOptions, DispatchOptions } from 'vuex';

export interface RootState {
  token: string | null;
}

const store = createStore<RootState>({
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    saveToken({ commit }, token: string | null) {
      commit('setToken', token);
    },
  },
  getters: {
    getToken: state => state.token,
  },
});

export default store;
