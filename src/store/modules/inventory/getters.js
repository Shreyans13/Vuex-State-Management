export const getters = {
	isSupplyLow: state => {
		return state.supply.filter(item => item.supply <= 5);
	}
};
