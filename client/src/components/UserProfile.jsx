import React from 'react';
import { Card, CardMedia, CardTitle, CardHeader} from 'material-ui/Card';

/*
Old, cardless html:

<div>
  <img src={props.user ? props.user.steamAvatarImageUrl : null} /><br />
  <a href={props.user ? props.user.steamProfileUrl : null}>{props.user ? props.user.steamScreenName : null}</a><br />
  {props.user ? props.user.steamRealName : null}
</div>
*/

const UserProfile = (props) => (
  <div>
    <Card className='userProfileCard'>
      <CardHeader
        title={props.user ? props.user.steamScreenName : null}
        subtitle={props.user ? props.user.steamRealName : null}
      />
      <CardMedia>
        <img src={props.user ? props.user.steamAvatarImageUrl : null} />
      </CardMedia>
    </Card>
  </div>
);

export default UserProfile;