import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ClanCreator from '../components/ClanCreator.jsx';
import ClanList from '../components/ClanList.jsx';
import Nav from '../components/Nav.jsx';
import { bindActionCreators } from 'redux';
import { fetchAllClans } from '../actions/actions.js';
import { connect } from 'react-redux';

const style = {
  height: '375px',
  width: '700px',
  border: '5px',
};

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const mapStateToProps = state => ({
  clans: state.clans
});
 
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllClans
}, dispatch);

class HomePage extends React.Component {

  // constructor (props) {
  //   super(props);
  // };

  componentWillMount() {
    this.props.fetchAllClans();
  }

  render () {
    return (
      <div>
        <h1 className='textCenter'>Welcome to ClanSisters!!</h1>
        <div className='clanSearchBox'>
          You can search for an existing clan... <AutoComplete
            hintText="Find a clan!!"
            dataSource={[]}
            menuProps={menuProps}
          />
        </div>
        <div className = 'clanCreatorButton'>
          Or simply create your own!! 
          <ClanCreator onSubmit={() => {}}/>
        </div>
        <div style={style}>
          Existing clans
          <ClanList clans={this.props.clans} />
        </div>
        <div className = 'usersOnlineStyle' >
          PlaceHolder for Users Online.
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);