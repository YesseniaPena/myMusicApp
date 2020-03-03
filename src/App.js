import React, { Component } from 'react';
import './App.css';
import navigationbar from './components/navigationbar';
import Dashboard from './components/dashboard';
import SignIn from './components/SignIn';
import { Grid } from '@material-ui/core';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		}
	}

	toggleSignIn = () => {
		this.setState({ loggedIn: !this.state.loggedIn })
	}








	render() {
		return (

			
			<div id="container">
	

			<section className="dashboard trim gutter">
				{ this.state.loggedIn && (
						<navigationbar/> 
					)}
					
					{ this.state.loggedIn && (
						
						<Dashboard /> 
						
					)}
					
					{ !this.state.loggedIn && (
						<SignIn signIn={this.toggleSignIn} />
					)}
				</section>
				
				
			</div>
			
		)
	}
}

export default App;