import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle () => this.setState({open: !this.state.open});
  render() {
    return (
      <AppBar
        title={<span style={styles.title}>React Redux Express Mongo Auth</span>}
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementRight={
          <FlatButton
            label="Sign In"
            containerElement={<Link to="/signin"/>}
          />
        }
      >
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => {
            console.log(this.state.open);
            this.setState({ open: false });
          }}
        >
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </AppBar>
    )
  }
}

export default Header
