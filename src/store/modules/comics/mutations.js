import types from "./types";

export default {
  [types.mutations.SET_COMIC](state, payload) {
    state.comic = payload;
  },
  [types.mutations.SET_CURRENT_NUMBER_COMIC](state, payload) {
    state.currentNumberComic = payload;
  },
  [types.mutations.SET_POINTS](state, payload) {
    state.points = payload;
  },
  [types.mutations.SET_LOADING_COMIC](state, payload) {
    state.isLoadingComic = payload;
  },
};
