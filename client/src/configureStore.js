import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/clanReducers.js';

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

export default function configureStore() {
  let store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}