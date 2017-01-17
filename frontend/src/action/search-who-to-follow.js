export const searchWhoToFollowRequest = () => {
	return { type: 'SEARCH_WHO_TO_FOLLOW_REQUEST' };
};
export const searchWhoToFollowSuccess = (response) => {
	return { type: 'SEARCH_WHO_TO_FOLLOW_SUCCESS', response };
};
export const searchWhoToFollowFailure = (response) => {
	return { type: 'SEARCH_WHO_TO_FOLLOW_FAILURE', response };
};
export default () => {
	return (dispath, getState) => {
		dispatch(searchWhoToFollowRequest());
		searchWhoToFollow().then((response) => {
			dispath(searchWhoToFollowSuccess(response));
		}).catch((response) => {
			dispath(searchWhoToFollowFailure(response));
		});
	};
};