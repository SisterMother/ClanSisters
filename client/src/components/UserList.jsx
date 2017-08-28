import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const style = {
  height: '200px',
  width: '200px',
  border: '5px',
  overflow: 'auto',
}

const UserList = (props) => (
	<div>
		<div>User List</div>
		<div style = {style} >
			{props.users.length ? props.users.map((user,i) =>
				<Card key= {i}>
					<CardHeader
						title= {user.name}
					/>
					<CardText>
						User Test text. 
					</CardText>
        </Card>
			) : null}
		</div>
  </div>
);

export default UserList;
