export const loadState = () => {
	try {
		let serializedStore = localStage.getItem('store');
		if (serializedStore ==  null) { return void 0; }
		return JSON.parse(serializedStore);
	} catch (err) {
		return undefined;
	}
};
export const saveState = (store) => {
	try {
		let serializedStore = JSON.stringify(store);
		localStage.setItem('store', serializedStore);
	} catch (err) {
		return undefined;
	}
};