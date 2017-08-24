const types = {
  ADD_CLANS: 'ADD_CLANS',
  UPDATE_USER: 'UPDATE_USER'
}

//the below function is whats known as a 'thunk', 
//and it returns the action object.
//This would allow for async operations to be performed 
//before returning
const addClansAsync = (clans) => {
  return {
    type: types.ADD_CLANS,
    payload: clans
  }
}

//addClans is an action cretor
//note that action creators in redux are always 
//ran with dispatch, a method of redux
export const addClans = (clans) => {
  return dispatch => {
    dispatch(addClansAsync);
  }
}
