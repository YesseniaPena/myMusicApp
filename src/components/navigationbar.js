import React, { Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



class NavBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			String: '',
		};
	
  }



  render() {  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
  )}
}


export default NavBar;