export const getters = {
	serviceDateTime: state => {
		const date = state.lastServiced.toLocaleString("default", {
			year: "numeric",
			month: "short",
			day: "numeric"
		});
		const time = state.lastServiced.toLocaleString("default", {
			hour: "2-digit",
			minute: "2-digit",
			timeZoneName: "short"
		});
		return {
			date,
			time
		};
	}
};
