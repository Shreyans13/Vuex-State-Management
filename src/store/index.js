import Vue from "vue";
import Vuex from "vuex";
import inventory from "./modules/inventory/index";
import machine from "./modules/machine/index";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	getters: {},
	actions: {},
	mutations: {},
	modules: {
		inventory,
		machine
	}
});
