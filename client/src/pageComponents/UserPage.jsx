import React from 'react';
import Nav from '../components/Nav.jsx';
import { connect } from 'react-redux';
import ForumList from '../components/ForumList.jsx';
import { bindActionCreators } from 'redux';
import { fetchUserClans, fetchUserForums, fetchCurrentUser } from '../actions/actions.js';
import ClanList from '../components/ClanList.jsx';
import UserProfile from '../components/UserProfile.jsx';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  clans: state.clans,
  forums: state.forums,
});
 
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCurrentUser,
  fetchUserClans,
  fetchUserForums
}, dispatch);

class UserPage extends React.Component {
  constructor (props) {
    super(props);
    var profileDataStyles = {
      width: '300px',
      border: '50px black',
      padding: '50px',
      margin: '50px,'
    };
    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen () {
    this.setState({open: true});
  }

  handleClose () {
    this.setState({open: false});
  }

  componentWillMount() {
    //Need to replace hard-coded id
    this.props.fetchCurrentUser(1);
    this.props.fetchUserClans(1);
    this.props.fetchUserForums(1);
  }

  render() {
    return (
      <div>
        <div className = 'profileData'>
          <UserProfile user={this.props.currentUser}/><br />
        </div>
        <div>
          CLANS<br />
          <ClanList clans={this.props.clans}/>
        </div>
        <div className = 'userForumListBox'>
          FORUMS<br />
          <ForumList 
            forums={this.props.forums}
            handleClose = {this.handleClose} 
            handleOpen = {this.handleOpen} 
            open = {this.state.open}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);