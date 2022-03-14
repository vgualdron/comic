export default {
  PATH: '@module/comics',
  actions: {
    FETCH_COMIC: '@actions/fetchComic',
    UPDATE_CURRENT_NUMBER_COMIC: '@actions/updateCurrentNumberComic',
    FETCH_POINTS: '@actions/fetchPoints',
    UPDATE_POINTS: '@actions/updatePoints',
  },
  getters: {},
  mutations: {
    SET_COMIC: '@mutations/setComic',
    SET_CURRENT_NUMBER_COMIC: '@mutations/setCurrentNumberComic',
    SET_POINTS: '@mutations/setPoints',
    SET_LOADING_COMIC: '@mutations/setLoadingComic',
  },
};
