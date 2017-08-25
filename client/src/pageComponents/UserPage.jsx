import React from 'react';
import UserClans from '../components/UserClans.jsx';
import ForumList from '../components/ForumList.jsx'

/*
Right now I just plan on having the user profile information in a div box, I don't see anything in-
the material-ui library that is really built for that type of stuff.

The posts will probably need to be fed via an array with a map. It would be nice to be able to go back to-
the api for more posts once you scroll past a certain number of posts (say 25), or else loading all of the-
posts will need to be loaded.


*/


var fakeClans = [
  {title: 'testClan001', id: '001'},
  {title: 'testClan002', id: '002'},
  {title: 'testClan003', id: '003'}
]



const User = (props) => {
    return (
    <div>
        <div className = 'userForumListBox'>
            INSERT_USER_NAME_HERE'S forums
          <ForumList forums={[]} />
        </div>      
        <div className = 'profileData'>
        This box here is designed to hold our user profile data.
        </div>
        <div>
          <UserClans clans= {fakeClans} />
        </div>
    </div>
    )
}

export default User;
