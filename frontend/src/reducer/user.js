import { combineReducers } from 'redux';

import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from './../constant';
import UserService from './../service/user';

let persisted = UserService.getPersisted();

const authInitialState = persisted ? persisted.id : null;
export const auth = (state = authInitialState, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS:
			return action.response.id;
			break;
		// case SIGNOUT_SUCCESS:
		// 	return null;
		// 	break;
		default:
			return state;
	}
};

const listState = persisted ? [ persisted.id ] : [];
export const list = (state = listState, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS:
			return [ ...state, action.response.id ];
			break;
		// case SIGNOUT_REQUEST:
		// 	return state.filter((id) => { return id !== action.id });
		// 	break;
		// case SEARCH_USER_WHO_TO_FOLLOW_SUCCESS:
		// 	return [
		// 		...state,
		// 		response.map((user) => { return user.id })
		// 	];
		default:
			return state;
	}
};

const itemState = persisted ? { [ persisted.id ]: persisted } : {};
export const item = (state = itemState, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS:
			return {
				...state,
				[ action.response.id ]: action.response
			};
			break;
		// case SIGNOUT_REQUEST:
		// 	return state.filter((id) => { return id !== action.id });
		// 	break;
		// case SEARCH_USER_WHO_TO_FOLLOW_SUCCESS:
		// 	action.response.forEach((user) => {
		// 		state[user.id] = user;
		// 	});
		// 	return state;
		default:
			return state;
	}
};

export const whoToFollowList = (state = [], action) => {
	switch (action.type) {
		// case SEARCH_USER_WHO_TO_FOLLOW_SUCCESS:
		// 	return [
		// 		...state,
		// 		response.map((user) => { return user.id })
		// 	];
		// 	break;
		default:
			return state;
	}
};

export default combineReducers({
	list,
	item,
	auth,
	whoToFollowList
});