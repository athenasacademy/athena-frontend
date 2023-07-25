import { createStore, Store as VuexStore, CommitOptions, DispatchOptions, Module, StoreOptions } from 'vuex';

export interface RootState {
  token: string | null;
}

type Mutations<S> = {
  [key: string]: (state: S, payload: any) => void;
};

type Actions<S, R> = {
  [key: string]: (context: AugmentedActionContext<S, R>, payload: any) => any;
};

type Getters<S, R> = {
  [key: string]: (state: S, getters: any, rootState: R, rootGetters: any) => any;
};

export type AugmentedVuexStore<S, R> = Omit<VuexStore<S>, 'commit' | 'dispatch' | 'getters'> & {
  commit<
    K extends keyof Mutations<S>,
    P extends Parameters<Mutations<S>[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations<S>[K]>;
} & {
  dispatch<
    K extends keyof Actions<S, R>,
    P extends Parameters<Actions<S, R>[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: DispatchOptions
  ): ReturnType<Actions<S, R>[K]>;
} & {
  getters: {
    [K in keyof Getters<S, R>]: ReturnType<Getters<S, R>[K]>;
  };
};

// Definir a interface para o contexto das actions (AugmentedActionContext)
export interface AugmentedActionContext<S, R> {
  commit<K extends keyof Mutations<S>>(
    key: K,
    payload?: Parameters<Mutations<S>[K]>[1],
    options?: CommitOptions
  ): ReturnType<Mutations<S>[K]>;

  dispatch<K extends keyof Actions<S, R>>(
    key: K,
    payload?: Parameters<Actions<S, R>[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions<S, R>[K]>;

  getters: {
    [K in keyof Getters<S, R>]: ReturnType<Getters<S, R>[K]>;
  };
}

// Define the store modules (se você tiver módulos, adicione-os aqui)
const modules = {};

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
  modules,
});

export default store;
