import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const style = {
  height: '200px',
  width: '500px',
  border: '5px',
  overflow: 'auto',
};

class ForumList extends React.Component {
  constructor (props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    this.state = {
      open: false
    };
  }

  handleOpen () {
    this.setState({open: true});
  }
  handleClose () {
    this.setState({open: false});
  }

  render () {
    return (
      <div>
        <div style={style}>
          {this.props.forums.length ? this.props.forums.map(forum =>
            <Card key={forum.id}>
              <CardHeader
                title={forum.name}
                subtitle={forum.clanId}
              />
              <CardActions>
                <FlatButton label="View Forum" onClick={console.log} />
              </CardActions>
            </Card>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ForumList;