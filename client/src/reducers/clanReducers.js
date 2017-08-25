import { types } from '../actions/clanActions.js';

export const rootReducer = (state, action) => {
  let newState;
  console.log('IN THE REDUCER MUTHA FUCKAAAAAA, action: ', action);
  if (action.type === types.FETCH_ALL_CLANS) {
    newState = {...state, clans: action.payload};
  } else if (action.type === types.FETCH_USER_CLANS) {
    newState = {...state, members: action.payload};
  } else if (action.type === types.ADD_CLAN) {
    newState = {...state, clans: action.payload};
  }
  return newState || state;
};