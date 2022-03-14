import types from "./types";
import comicsApi from "../../../api/comics/comicsApi";

export default {
  async [types.actions.FETCH_COMIC]({ commit, state }) {
    try {
      commit(types.mutations.SET_LOADING_COMIC, true);
      const data = {
        number: state.currentNumberComic
      };

      const response = await comicsApi.fetchComic(data);
      commit(types.mutations.SET_COMIC, response.data);
    } catch (error) {
      console.error(error);
    } finally {
      commit(types.mutations.SET_LOADING_COMIC, false);
    }
  },
  [types.actions.UPDATE_CURRENT_NUMBER_COMIC]({ commit }, payload) {
    commit(types.mutations.SET_CURRENT_NUMBER_COMIC, payload);
  },
  async [types.actions.FETCH_POINTS]({ commit }, payload) {
    try {
      const response = await comicsApi.fetchPoints(payload);
      commit(types.mutations.SET_POINTS, response);
    } catch (error) {
      console.error(error);
    }
  },
  async [types.actions.UPDATE_POINTS]({ commit }, payload) {
    try {
      const response = await comicsApi.addPoints(payload);
      commit(types.mutations.SET_POINTS, response);
    } catch (error) {
      console.error(error);
    }
  }
};
