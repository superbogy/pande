import React from 'react';
import style from './index.scss';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
export default class LeftBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  };

  render() {
    return (
      <div>
        <LeftNav className={style.left} open={this.state.open} >
          <MenuItem>Menu Item 1 </MenuItem>
          <MenuItem>Menu Item 2 </MenuItem>
        </LeftNav>
      </div>
    );
  }
}