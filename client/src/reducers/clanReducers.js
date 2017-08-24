import { fetchAllClans, fetchUserClans, types } from '../actions/clanActions.js';

const initialState = {
  chatrooms: [],
  users: [],
  currentUser: null,
  clans: [],
  currentClan: null,
  chatrooms: [],
  currentChatroom: null,
  membersOnline: [],
  posts: []
};

export const rootReducer = (state = initialState, action) => {
  let newState;
  if (action.type === types.FETCH_ALL_CLANS) {
    newState = {...state, clans: action.payload};
  } else if (action.type === types.FETCH_USER_CLANS) {
    newState = {...state, members: action.payload};
  }
  return newState || state;
};

