import types from "./types";
import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};

export const name = types.PATH;
