import React from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
/*
Dear Redux-ers, please be aware. 
The props for this component should be passed via a map 
or some other function that is able to take an array of objects
and feed the objects one by one into this component in order to 
build our list of clans. 
*/

const ClanList = (props) => {
  return (
    <div>
      <div>Clan List</div>
      {props.clans && props.clans.length ? props.clans.map((clan, i) => {
        return (
          <Card key={i} className='clan-list'>
            <CardHeader
              title={clan.name}
              subtitle={clan.description}
            />
            <CardActions>
              <FlatButton className='view-posts' label='Clan Page' />
            </CardActions>
          </Card>
        );
      }) : null}
    </div>
  );
}

export default ClanList;