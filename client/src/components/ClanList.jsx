import React from 'react';
import { Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

/*
Card Actions:

<CardActions>
  <FlatButton className='view-posts' label='Clan Page' />
</CardActions>
*/

const ClanList = (props) => (
  <div>
    {props.clans.length ? props.clans.map((clan, i) => {
      return (
        <Card key={i} className='clan-list'>
          <CardHeader
            avatar={clan.avatar}
            title={clan.name}
            subtitle={clan.description}
          />
        </Card>
      );
    }) : null}
  </div>
);

export default ClanList;