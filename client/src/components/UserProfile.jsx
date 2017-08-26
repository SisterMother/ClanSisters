import React from 'react';

const UserProfile = (props) => (
  <div>
    <div>
    Username: {props.user ? props.user.steamScreenName : null}<br />
    REAL Name: {props.user ? props.user.steamRealName : null}
    </div>
  </div>
)

export default UserProfile