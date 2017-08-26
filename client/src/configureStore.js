import { createStore, applyMiddleware, compose } from 'redux';
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
  posts: [],
  members: [],
  forums: []
};

const middleware = [
  thunk
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
)

export default function configureStore() {
  let store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  );
  return store;
}
