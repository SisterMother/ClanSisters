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

const Home = (props) => {
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
        Or simply create your own!! <ClanCreator />
      </div>
      <div style= {style} >
        Existing clans
        <ClanList clans={testClans} />
      </div>
      <div className = 'usersOnlineStyle' >
        PlaceHolder for Users Online.
      </div>

    </div>
  )
}

export default Home
