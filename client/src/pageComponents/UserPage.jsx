import React from 'react';
import UserClans from '../components/UserClans.jsx'
import ForumList from '../components/ForumList.jsx'
import { connect } from 'react-redux'
import { fetchUserClans } from  '../actions/clanActions'


/*
Right now I just plan on having the user profile information in a div box, I don't see anything in-
the material-ui library that is really built for that type of stuff.

The posts will probably need to be fed via an array with a map. It would be nice to be able to go back to-
the api for more posts once you scroll past a certain number of posts (say 25), or else loading all of the-
posts will need to be loaded.


Note, our testClans are the same in several different places. 
*/


const testForums = [
  {title: 'test001', heading: 'test001', id: 'test001'},
  {title: 'test002', heading: 'test002', id: 'test002'},
  {title: 'test003', heading: 'test003', id: 'test003'}
]

const testClanList  = [
  {name: 'StarCraft', description: 'StarCraft Talk', id: '001'},
  {name: 'Mass Effect', description: 'salkdfjl', id: '003'}
]

class User extends React.Component {
  constructor (props ) {
    super(props)
    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen () {
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };


  render () {
      return (
      <div>
          <div className = 'userForumListBox'>
              INSERT_USER_NAME_HERE'S forums
            <ForumList 
            handleClose = {this.handleClose} 
            handleOpen = {this.handleOpen} 
            open = {this.state.open}
            forums = {testForums} />
          </div>      
          <div className = 'profileData'>
          This box here is designed to hold our user profile data.
          </div>
          <div>
            <UserClans clans = {testClanList} />
          </div>
      </div>
      )
  }
}

export default User;
