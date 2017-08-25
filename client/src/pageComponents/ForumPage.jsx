import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';


/*
As before, I have used the map method in order to populate the forums page. 
Eventually, I think that we would want to add more to this page. 


*/


const fakePosts = [
  {user: 'LeetteeL', post: 'VOTE CTHULHU', id: '001' },
  {user: 'QWERTU', post: 'DORITOS DORITIOS DORITOS DORITOS', id: '002'},
  {user: 'Rack Heactor', post: '1010101010101001111100001010101010', id: '003'},
  {user: 'DBake', post: 'Ting is a loser addicted to soda', id: '004'}
]
const style = {
  height: '200px',
  width: '600px',
  border: '5px',
  overflow: 'auto',
}

const Forum = () => {
    return (
    <div style={style}>
      {fakePosts.map((post) => {
        return (
          <div key={post.id}>
            <Card>
              <CardHeader
                title={post.user}
              />
              <CardText>
                {post.post}
              </CardText>
            </Card>
          </div>
        );
      })}
    </div>
    )
}

export default Forum;