import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class ClanChip extends React.Component {
  constructor (props) {
    super(props);
  }

  handleTouchTap () {
    alert('This should redirect to the appropriate clan page.');
  }

  render () {
    return (
      <div style={styles.wrapper}>
        <Chip
          onClick={this.handleTouchTap}
          style={styles.chip}
        >
          {this.props.clan.title}
        </Chip>
      </div>
    );
  }
}

export default ClanChip;