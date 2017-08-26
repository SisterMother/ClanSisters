import React from 'react';

const UserForums = (props) => (
  <div>
    {props.forums ? props.forums.map((forum, i) => {
      return (<div key={i}>{forum.name}</div>);
    }) : null}
  </div>
)

export default UserForums