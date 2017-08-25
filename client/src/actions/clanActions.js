import axios from 'axios';

export const types = {
  FETCH_ALL_CLANS: 'FETCH_ALL_CLANS',
  FETCH_USER_CLANS: 'FETCH_USER_CLANS',
  ADD_CLAN: 'ADD_CLAN'
  FETCH_CURRENT_USER: 'FETCH_CURRENT_USER',
  FETCH_USER_FORUMS: 'FETCH_USER_FORUMS'
};

//fetchAllClans is an action cretor
//note that action creators in redux are always 
//ran with dispatch, a method of redux
export const fetchAllClans = () => {
  axios.get('/clans')
    .then(clans => {
      console.log('should be all of the clans: ', clans);
      //pass them into the returned action object on the payload
      dispatch({
        type: types.FETCH_ALL_CLANS,
        payload: clans
      });
    })
    .catch(err => {
      console.log('error getting all clans');
      throw err;
    });
};

export const addClan = () => {
  return {
    type: types.ADD_CLAN,
    payload: [{key: 1, type: 'FPS', tag: ['shooter', 'Call of Duty'], avatar: 'avatarURLimg', description: 'this game is fun, play it.'}]
  };
};
// axios.post('/', {type: 'FPS', tag: ['shooter', 'Call of Duty'], avatar: 'avatarURLimg', description: 'this game is fun, play it.'})
//   .then(res => {
//     fetchAllClans();
//   })
//   .catch(err => console.log('error in addClan: ', err));
 
export const fetchUserClans = (user) => {
  // axios.get('/:user/members')
  //   .then(memberships => {
  //     console.log('we got the memberships: ', memberships);
  //     dispatch({
  //       type: types.FETCH_USER_CLANS,
  //       payload: memberships
  //     });
  //   })
  //   .catch(err => {
  //     console.log('error getting user clans');
  //     throw err;
  //   });

  // Placeholder
  return {
    type: types.FETCH_USER_CLANS,
    payload: [{name: 'clan1'}, {name: 'clan2'}]
  }
};

export const fetchCurrentUser = () => {
  // axios.get('/api/currentUser')
  //   .then(user => {
  //     console.log('behold, the current user: ', user);
  //     dispatch({
  //       type: FETCH_CURRENT_USER,
  //       payload: user
  //     });
  //   })
  //   .catch(err => {
  //     console.log('error getting current user');
  //     throw err;
  //   });

  // Placeholder - returns hardcoded object
  return {
    type: types.FETCH_CURRENT_USER,
    payload: {steamScreenName: 'brendanusa1', steamRealName: 'Brendan Bansavage'}
  }
}

export const fetchUserForums = (user) => {
  // Placeholder
  return {
    type: types.FETCH_USER_FORUMS,
    payload: [{name: 'forum1'}, {name: 'forum2'}]
  }
}