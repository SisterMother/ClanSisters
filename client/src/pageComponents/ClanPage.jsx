import React from 'react'
import ForumList from '../components/ForumList.jsx';
import AutoComplete from 'material-ui/AutoComplete';
import UserList from '../components/UserList.jsx';
import ClanList from '../components/ClanList.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllClans, addClan } from  '../actions/clanActions'

/*
The find clans component is the same as the one on the home page. 

I think this has been mentioned before, but it would be super cool if we 
could have clans have their own avatars. 

When the button is pressed we should be able to join the clan. 
More styling can be added pretty easily, look at the Material-ui docs. 

The Autocomplete that we have here should return the same results as the
the autocomplete from the home page. 


*/

const joinClan = () => {
  alert('NUCLEAR LAUNCH IN 5, 4, 3...')
  this.props.dispatch(addClan)
}

const testForums = [
  {title: 'test001', heading: 'test001', id: 'test001'},
  {title: 'test002', heading: 'test002', id: 'test002'},
  {title: 'test003', heading: 'test003', id: 'test003'}
]

const testClans = [
  'Starcraft',
  'Mass Effect',
  'FIFA',
  'Crysis',
  'Battlefield',
  'Destiny'
]

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const mapStateToProps = (state) => {
  return {
    clans: state.clans
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchAllClans,
    addClan
  }, dispatch)
}

class Clan extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      open : false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOpen () {
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };

  handleClick () {
    this.props.fetchAllClans();
  };

  render () {
    return (
      <div>
        <div className = 'textCenter'>
          <h1> WURLDZ BIGGEST BORDERLANDS 1 CLAN!! </h1>
          <RaisedButton
          label = 'JOIN THIS CLAN'
          onClick = {() => this.handleClick()}
        />
        <div>
        <AutoComplete         
            hintText="Find a different clan!!"
            dataSource={testClans}
            menuProps={menuProps}
        />
        </div>

        </div>

        <div>
          <h2>YOUR CLAN LIST:</h2>
          <ClanList clans={this.props.clans}/>
        </div>

        <div className = 'floatLeft'>
          Current Clan Forums
          <ForumList
          handleClose = {this.handleClose} 
          handleOpen = {this.handleOpen} 
          open = {this.state.open}
          forums = {testForums} 
        /> 
        </div>
        <div className ='userForumListBox'>
          <UserList users ={[]} /> 
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clan);