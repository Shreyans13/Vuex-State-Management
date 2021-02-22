export const actions = {
	serviceMachine({ commit }) {
		commit("updateServiceDate", new Date());
	}
};
