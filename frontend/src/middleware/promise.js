export default (store) => {
	return (next) => {
		return (action) => {
			typeof action.then === 'function'
				? action.then(next)
				: next(action);
		};
	};
};