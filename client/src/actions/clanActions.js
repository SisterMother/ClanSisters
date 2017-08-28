import axios from 'axios';

export const types = {
  FETCH_ALL_CLANS: 'FETCH_ALL_CLANS',
  FETCH_USER_CLANS: 'FETCH_USER_CLANS',
  ADD_CLAN: 'ADD_CLAN',
  FETCH_CURRENT_USER: 'FETCH_CURRENT_USER',
  FETCH_USER_FORUMS: 'FETCH_USER_FORUMS',
  FETCH_CLAN_FORUMS: 'FETCH_CLAN_FORUMS'
};

//fetchAllClans is an action cretor
//note that action creators in redux are always 
//ran with dispatch, a method of redux
export const fetchAllClans = () => {
  const getClans = axios.get('api/clans');
  return (dispatch) => {
    getClans
      .then(clans => {
        dispatch({
          type: types.FETCH_ALL_CLANS,
          payload: clans.data.results
        });
      })
      .catch(err => {
        console.log('error getting all clans');
        throw err;
      });
  };
};

export const addClan = () => {
  return {
    type: types.ADD_CLAN,
    payload: [{key: 1, type: 'FPS', tag: ['shooter', 'Call of Duty'], avatar: 'avatarURLimg', description: 'this game is fun, play it.'}]
  };
};
export const fetchUserClans = (user) => {
  let getClans = axios.get(`/${user}/members`);
  return (dispatch) => {
    getClans
      .then(memberships => {
        dispatch({
          type: types.FETCH_USER_CLANS,
          payload: memberships
        });
      })
      .catch(err => {
        console.log('error getting user clans');
        throw err;
      });
  };
};

export const fetchCurrentUser = () => {
  // Placeholder - returns hardcoded object
  return {
    type: types.FETCH_CURRENT_USER,
    payload: {steamScreenName: 'brendanusa1', steamRealName: 'Brendan Bansavage'}
  };
};

export const fetchUserForums = (user) => {
  // Placeholder
  return {
    type: types.FETCH_USER_FORUMS,
    payload: [{name: 'forum1'}, {name: 'forum2'}]
  };
};

export const fetchClanForums = (clanId) => {
  //below, the template string will append the clanId query to the end of the 
  //request URL, otherwise, just render to an empty string, not changing the 
  //request query to just get all clans
  const getClanForums = axios.get(`/api/forums${clanId ? `?id=${clanId}` : ''}`);
  return (dispatch) => {
    getClanForums
      .then(forums => {
        dispatch({
          type: types.FETCH_CLAN_FORUMS,
          payload: forums.data.results
        });
      })
      .catch(err => {
        console.log('error getting all forums');
        throw err;
      });
  };
};
