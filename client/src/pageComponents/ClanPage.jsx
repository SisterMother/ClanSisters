import React from 'react';
import ForumList from '../components/ForumList.jsx';
import AutoComplete from 'material-ui/AutoComplete';
import UserList from '../components/UserList.jsx';
import ClanList from '../components/ClanList.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../components/Nav.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllClans, addClanMember, fetchClanForums, fetchClanMembers } from  '../actions/actions';

const joinClan = () => {
  this.props.dispatch(addClanMember)
}

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const mapStateToProps = (state) => {
  return {
    clans: state.clans,
    forums: state.forums,
    members: state.members
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchAllClans,
    addClanMember,
    fetchClanForums,
    fetchClanMembers
  }, dispatch)
}

class ClanPage extends React.Component {
  constructor (props) {
    super (props);
  }

  componentDidMount() {
    this.props.fetchClanForums();
    this.props.fetchClanMembers();
  }

  render () {
    return (
      <div>
        <Nav/>
        <div className = 'textCenter'>
          <RaisedButton
          label = 'Join This Clan'
          onClick = {() => this.props.addClanMember()}/>
          
        </div>
        <h2>Your Clans</h2>
        <ClanList clans={this.props.clans || []}/>
        <div className = 'floatLeft'>
          Current Clan Forums
          <ForumList forums = {this.props.forums} />
        </div>

        <h2>Should be the clan members JSON: {this.props.clans || []}</h2>

        <div className ='userForumListBox'>
          <UserList users ={this.props.members || []} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClanPage);