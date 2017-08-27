import {
  FETCH_ALL_CLANS,
  FETCH_USER_CLANS,
  ADD_CLAN,
  FETCH_ALL_USERS,
  FETCH_CURRENT_USER,
  FETCH_USER_FORUMS,
  FETCH_CLAN_FORUMS
} from '../actions/actions.js';

const types = {
  FETCH_ALL_USERS: 'FETCH_ALL_USERS',
  FETCH_USER_CLANS: 'FETCH_USER_CLANS',
  FETCH_CURRENT_USER: 'FETCH_CURRENT_USER',
  FETCH_ALL_CLANS: 'FETCH_ALL_CLANS',
  ADD_CLAN: 'ADD_CLAN',
  FETCH_USER_FORUMS: 'FETCH_USER_FORUMS',
  FETCH_CLAN_FORUMS: 'FETCH_CLAN_FORUMS'
};

export const rootReducer = (state, action) => {
  let newState;
  if (action.type === types.FETCH_ALL_CLANS) {
    newState = {...state, clans: action.payload};
  } else if (action.type === types.FETCH_USER_CLANS) {
    newState = {...state, clans: action.payload};
  } else if (action.type === types.ADD_CLAN) {
    newState = {...state, clans: action.payload};
  } else if (action.type === types.FETCH_CURRENT_USER) {
    newState = {...state, currentUser: action.payload};
  } else if (action.type === types.FETCH_ALL_USERS) {
    newState = {...state, forums: action.payload};
  } else if (action.type === types.FETCH_USER_FORUMS) {
    newState = {...state, forums: action.payload};
  } else if (action.type === types.FETCH_CLAN_FORUMS) {
    newState = {...state, forums: action.payload};
  }
  return newState || state;
};