import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
      clanName: ''
    };
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
  }

  handleInputChange (property, e) {
    let stateChange = {};
    stateChange[property] = e.target.value;
    this.setState(stateChange);
  }
  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.sendRequest();
    }
  }

  handleOpen () {
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <RaisedButton label="Clan Builder" onClick={this.handleOpen} />
        <Dialog
          title="Create a new clan"
          actions={this.actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <TextField onKeyPress={this.handleKeyPress} hintText='hello@world.com' floatingLabelText='Clan Name' type='text' value={this.state.clanName} onChange={this.handleInputChange.bind(this, 'clanName')} />
        </Dialog>
      </div>
    );
  }
}
