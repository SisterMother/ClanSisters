import axios from 'axios';

export const types = {
  FETCH_ALL_CLANS: 'FETCH_ALL_CLANS',
  FETCH_USER_CLANS: 'FETCH_USER_CLANS'
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

 
export const fetchUserClans = (userId) => {
  axios.get('/:userId/members')
    .then(memberships => {
      console.log('we got the memberships: ', memberships);
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


