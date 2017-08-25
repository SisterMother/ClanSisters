import React from 'react';
import ClanChip from './ClanChip.jsx';

/*
This component is designed to show which clans our user is a member of.
The chip format that they will be placed into is pretty sweet, having a picture
associated with the clan would take this to the next level.
>>>>>>> UserPage views receive state from UserPage

Our functions should take us to the forum page of the appropriate clan when clicked upon.
Right now we just have text in our chips. I am just using a map in order to dynamically create
our chips right now, I'm not sure if this process can be made easier via redux.

In order to add an avatar to our chips use the following code: <Avatar src="IMAGE_SOURCE" />
*note Avatar must be imported from material-ui. I have already done this in the UserClanChips component.

It would also be cool if clans could have chip colors associated with them.
*/

const style = {
  height: '200px',
  width: '200px',
  border: '5px',
  overflow: 'auto',
};

const UserClans = (props) => (
  <div>
    <div className = 'userClanScrollBox' >
      {props.clans? props.clans.map((clan, i) => {
        return (<ClanChip clan={clan} key={i} />);
      }) : null}
    </div>
  </div>
)

export default UserClans;