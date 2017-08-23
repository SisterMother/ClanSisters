import React from 'react'
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
function handleTouchTap() {
  alert('This should redirect to the appropriate clan page.');
}

const UserClanChips = (props) => (
    <div style={styles.wrapper}>
        <Chip
          onClick={handleTouchTap}
          style={styles.chip}
        >
          {props.chip.title}
        </Chip>
    </div>

)

export default UserClanChips