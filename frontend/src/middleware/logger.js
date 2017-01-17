export default (store) => {
	return (next) => {
		return (action) => {
			console.log('prev state', store.getState());
			console.log('action', action);
			const result = next(action);
			console.log('next state', store.getState());
			return result;
		};
	};
};