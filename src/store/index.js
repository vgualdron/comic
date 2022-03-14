import Vue from 'vue'
import Vuex from 'vuex'
import comics, { name as comicsName } from './modules/comics';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
		[comicsName]: comics,
	},
})
