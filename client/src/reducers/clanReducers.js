import { fetchAllClans, fetchUserClans, fetchCurrentUser, types } from '../actions/clanActions.js';

export const rootReducer = (state, action) => {
  let newState;
  if (action.type === types.FETCH_ALL_CLANS) {
    newState = {...state, clans: action.payload};
  } else if (action.type === types.FETCH_USER_CLANS) {
    newState = {...state, members: action.payload};
  } else if (action.type === types.ADD_CLAN) {
    newState = {...state, clans: action.payload};
  } else if (action.type === types.FETCH_CURRENT_USER) {
    newState = {...state, currentUser: action.payload};
  } else if (action.type === types.FETCH_USER_FORUMS) {
    newState = {...state, forums: action.payload};
  } else if (action.type === types.FETCH_CLAN_FORUMS) {
    newState = {...state, forums: action.payload};
  }
  return newState || state;
};