import React from 'react';
import ClanChip from './ClanChip.jsx';
import { connect } from 'react-redux';

/*
This component is designed to show which clans our user is a member of.
The chip format that they will be placed into is pretty sweet, having a picture
associated with the clan would take this to the next level.

Our functions should take us to the forum page of the appropriate clan when clicked upon.
Right now we just have text in our chips. I am just using a map in order to dynamically create
our chips right now, I'm not sure if this process can be made easier via redux.

In order to add an avatar to our chips use the following code: <Avatar src="IMAGE_SOURCE" />
*note Avatar must be imported from material-ui. I have already done this in the UserClanChips component.

It would also be cool if clans could have chip colors associated with them.
*/


const mapStateToProps = state => ({
  clans: state.clans
})

const mapStateToProps = state => ({
  clans: state.clans
})

const UserClans = (props) => (
  <div>

    <div className = 'userClanScrollBox' >
      {/*
      The map below accesses the Chip component; the uncommented version is a placeholder
      //{props.clans.map((clan) => {
        //return (<ClanChip clan={clan} key={clan.id} />);

      */}
      {props.clans.map((clan, i) => {
        return (<div key={i}>{clan.name}</div>);
      //{props.clans.map((clan) => {
        //return (<ClanChip clan={clan} key={clan.id} />);

      })}
    </div>
  </div>
)

export default connect(mapStateToProps)(UserClans);
