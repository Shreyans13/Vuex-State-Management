import { mutations } from "../store/modules/machine/mutations";

const persistServicedDatePlugin = store => {
	store.subscribe((mutation, state) => {
		// ping external api or db only if needed
		if (mutation.type === "updateServiceDate") {
			let record = {
				time: state.lastServiced.toLocaleString("default", {
					year: "numeric",
					month: "short",
					day: "numeric"
				}),
				persistFor: new Date().getTime() + persistTime
			};
			try {
				window.localStorage.setItem(
					"last_serviced",
					JSON.stringfy(record)
				);
			} catch (e) {
				throw e;
			}
		}
	});
};
export default persistServicedDatePlugin;
