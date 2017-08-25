import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ClanCreator from '../components/ClanCreator.jsx'
import ClanList from '../components/ClanList.jsx'

/*
Dear Brendan/Others. I am using the material-ui autocomplete.
It takes in a datasource array. That array should be a list of clan names.
Please set this somewhere and pass it in the datasource object.
Right Now I am just going to pass a test object in to ensure that it works correctly.
I have a div for the users online, it just needs to be passed whatever props we will use to populate this box.
*/

const testClans = [
  'Starcraft',
  'Mass Effect',
  'FIFA',
  'Crysis',
  'Battlefield',
  'Destiny'
]
const testClanList  = [
  {name: 'StarCraft', description: 'StarCraft Talk', id: '001'},
  {name: 'Mass Effect', description: 'salkdfjl', id: '003'}
]

const style = {
  height: '375px',
  width: '700px',
  border: '5px',
  overflow: 'auto',
  float: 'right',
};

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};



class Home extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      open: false,
      clanName: ''
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  };

  handleInputChange (property, e)  {
    let stateChange = {};
    stateChange[property] = e.target.value;
    this.setState(stateChange);
  }
  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.sendRequest();
    }
  }

  handleOpen () {
    this.setState({open: true});
  }

  handleClose () {
    this.setState({open: false});
  }

  render () {
    return (  <div>
      <h1 className= 'textCenter' > Welcome to ClanSisters!!</h1>
        <div className = 'clanSearchBox'>
          You can search for an existing clan... <AutoComplete
          hintText="Find a clan!!"
          dataSource={testClans}
          menuProps={menuProps}
          />
        </div>
        <div className = 'clanCreatorButton'>
          Or simply create your own!! 
          <ClanCreator 
            handleClose = {this.handleClose} 
            handleOpen = {this.handleOpen} 
            handleInputChange = {this.handleInputChange}
            handleKeyPress = {this.handleKeyPress}  
            open = {this.state.open}
            clanName = {this.state.clanName}
          />
        </div>
        <div style= {style} >
          Existing clans
          <ClanList clans={testClanList} />
        </div>
        <div className = 'usersOnlineStyle' >
          PlaceHolder for Users Online.
        </div>

      </div>
    )
  }
}

export default Home;