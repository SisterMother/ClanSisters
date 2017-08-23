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


const fakeCard = {
    title: 'WORLDZ BIGGEST RUNESCAPE GROUP!!',
    subtitle: 'Join to talk about runez'
}


const AllClans = () => {
    return (
      <Card className='clan-list'>
        <CardHeader
          title={fakeCard.title}
          subtitle={fakeCard.subtitle}
        />
        <CardActions>
          <FlatButton className='view-posts' label='View clan' />
        </CardActions>
      </Card>
    );
}

export default AllClans;