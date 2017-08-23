import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/*
This clanCreator will NOT work without Redux, as it is dependent upon props being passed to it.
A refactor with redux will probably do the following things.
First, it will put our open state within the state tree.
Second, it will put place our handleOpen/Close functions into our actions.
Third, it will use forms to send data back to our database when a new clan is created.


Right now the click events don't work correctly, however I don't see the need to invest time into fixing this--
when this will be refactored anyway.

The Material-ui Text Field component is probably the best to use within our dialog box.
I (Sam) have not added this feature yet, but may if I get everything scaffolded.
*/
export default class ClanCreator extends React.Component {
  constructor (props ) {
    super(props)
    this.state = {
      open: false,
    };



  const handleOpen = () => {
    console.log('opening')
    this.setState({open: true});
  };

  const handleClose = () => {
    console.log('closing')
    this.setState({open: false});
  };
}

  render() {
    const actions = [
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

    return (
      <div>

        <RaisedButton label="Create your own clan!!!" onClick={this.handleOpen} />
        <Dialog
          title="Create a new clan"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Testing, input boxes will be here eventually.
        </Dialog>

      </div>
    );
  }
}
