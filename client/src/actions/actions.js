import axios from 'axios';

export const types = {
  FETCH_ALL_CLANS: 'FETCH_ALL_CLANS',
  FETCH_CLAN_MEMBERS: 'FETCH_CLAN_MEMBERS',
  ADD_CLAN_MEMBER: 'ADD_CLAN_MEMBER',
  FETCH_USER_FORUMS: 'FETCH_USER_FORUMS',
  FETCH_CLAN_FORUMS: 'FETCH_CLAN_FORUMS',
  FETCH_ALL_USERS: 'FETCH_ALL_USERS',
  FETCH_CURRENT_USER: 'FETCH_CURRENT_USER'
};

// **********CLAN ACTIONS**********

export const addClanMember = (userId = 3, clanId = 2) => {
  let addMembership = axios.post(`/api/users/${userId}/members/${clanId}`);
  return dispatch => {
    addMembership
      .then(res => console.log('membership should have been added, response: ', res))
      .catch(err => console.log('failure adding new membership!: ', err));
  };
};

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

export const fetchClanMembers = (clanId = 1) => {
  const getClanMembers = axios.get(`api/clans/${clanId}/members`);
  return (dispatch) => {
    getClanMembers
      .then(members => {
        console.log('should be the clan members: ', members);
        dispatch({
          type: types.FETCH_CLAN_MEMBERS,
          payload: members.data.results
        });
      })
      .catch(err => {
        console.log('error getting the clan members: ');
        throw err;
      });
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

// **********USER ACTIONS**********

export const fetchAllUsers = () => {
  axios.get('/users')
    .then((users) => {
      dispatch({
        type: types.FETCH_ALL_USERS,
        payload: users
      });
    });
};

export const fetchCurrentUser = (user) => {
  const getUser = axios.get(`/api/users/${user}`);
  return (dispatch) => {
    getUser
      .then(user => {
        dispatch({
          type: types.FETCH_CURRENT_USER,
          payload: user.data.results
        });
      })
      .catch(err => {
        console.log('error getting current user');
        throw err;
      });
  };
};

// **********FORUM ACTIONS**********

export const fetchAllForums = () => {
  axios.get('/forums')
    .then((forums) => {
      dispatch({
        type: types.FETCH_ALL_FORUMS,
        payload: forums
      });
    })
    .catch(err => {
      console.log('Error fetching all forums');
      throw err;
    });
};

export const fetchUserForums = (user) => {
  const getUserForums = axios.get(`/api/users/${user}/forums`);
  return (dispatch) => {
    getUserForums
      .then(forums => {
        dispatch({
          type: types.FETCH_USER_FORUMS,
          payload: forums.data
        });
      })
      .catch(err => {
        console.log('Error getting user forums');
        throw err;
      });
  };
};

module.exports.fetchById = (forumId) => {
  axios.get(`/forums/${forumId}`)
    .then((forum) => {
      dispatch({
        type: types.FETCH_FORUM_BY_ID,
        payload: forum
      });
    })
    .catch(err => {
      console.log('Error fetching forum');
      throw err;
    });
};

module.exports.fetchPosts = (forumId) => {
  axios.get(`/forums/${forumId}/posts`)
    .then((posts) => {
      dispatch({
        type: types.FETCH_FORUM_POSTS,
        payload: posts
      });
    })
    .catch(err => {
      console.log('Error fetching forum posts');
      throw err;
    });
};

module.exports.fetchPost = (forumId, postId) => {
  axios.get(`/forums/${forumId}/posts/${postId}`)
    .then((post) => {
      dispatch({
        type: types.FETCH_FORUM_POSTS,
        payload: post
      });
    })
    .catch(err => {
      console.log('Error fetching forum post');
      throw err;
    });
};

module.exports.createPost = (forumId, postId) => {
  axios.post(`/forums/${forumId}/posts`)
    .catch(err => {
      console.log('Error fetching forum post');
      throw err;
    });
};

module.exports.createForum = (forumId, postId) => {
  axios.post(`/forums/${forumId}/posts`)
    .catch(err => {
      console.log('Error creating forum');
      throw err;
    });
};