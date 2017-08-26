import React from 'react';
import ForumList from '../components/ForumList.jsx'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCurrentUser, fetchUserClans, fetchUserForums } from '../actions/clanActions.js';
import UserClans from '../components/UserClans.jsx';
import UserForums from '../components/UserForums.jsx';
import UserProfile from '../components/UserProfile.jsx';

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

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  clans: state.clans,
  forums: state.forums,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCurrentUser,
  fetchUserClans,
  fetchUserForums
}, dispatch)

class User extends React.Component {

    constructor(props) {
        super(props);
        var profileDataStyles = {
            width: '300px',
            border: '50px black',
            padding: '50px',
            margin: '50px,'
        }
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


    componentWillMount() {
        this.props.fetchCurrentUser()
        this.props.fetchUserClans()
        this.props.fetchUserForums()
    }

    render() {
        return (
            <div>
                <div className = 'profileData'>
                PROFILE!
                <br />
                    <UserProfile user={this.props.currentUser}/>
                <br />
                </div>
                <div>
                    CLANS!<br />
                  <UserClans clans={this.props.clans}/>
                </div>
                <div className = 'userForumListBox'>
                    FORUMS! <br />
                    <UserForums 
                        forums={this.props.forums}
                        handleClose = {this.handleClose} 
                        handleOpen = {this.handleOpen} 
                        open = {this.state.open}
                    />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);