import React from 'react';
import UserClanChips from './userClanChips.jsx';

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


const fakeClans = [
    {title: 'Baldurs Gate Crew', id: '001' },
    {title: 'Witcher 3 clan', id: '002' },
    {title: 'FDT', id: '003' },
    {title: 'TEAM BELLA!!', id: '004' },
    {title: 'Overwatch', id: '005'},
    {title: 'kool clan', id: '006'},
]

const clanScrollbox = {
    height: '200px',
    width: '200px',
    border: '5px',
    overflow: 'auto',
}


const UserClans = () => (
    <div>
      <div style = {clanScrollbox} >
        {fakeClans.map(clan => 
        <UserClanChips chip = {clan} key= {clan.id} /> 
        )}
      </div>  
    </div>
)

export default UserClans