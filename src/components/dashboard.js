import React, {Component} from 'react';
import Online from './online';
import Volume from './volume';
import Sound from './sound';
import { Container, Paper, Chip, Typography, Card} from '@material-ui/core';
import { Grid } from '@material-ui/core';



class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notifications: [],
			online: true,
			volume: 60,
			quality: 'normal',
		};
	}


	

	// this recives a string and adds or removes it based on if it is in the notifications array
	toggleNotification = ( msg) => {
		const msgIndex = this.state.notifications.indexOf( msg )

		if ( this.state.notifications.includes( msg ) ) {
			this.state.notifications.splice( msgIndex, 1 )
		} else {
			this.setState({ notifications: [...this.state.notifications, msg] })
		}
	}
	addNotification = ( msg ) => {
		this.setState({ notifications: [...this.state.notifications, msg] })
	}
	removeNotification = ( msg ) => {
		const msgIndex = this.state.notifications.indexOf( msg )
		this.state.notifications.splice( msgIndex, 1 )
	}

	toggleOnline = () => {
		this.setState({ online: !this.state.online })

		const msg = "Your application is offline. You won't be able to share or stream music to other devices."

		this.toggleNotification( msg )
	}
	
	volumeSlider = ( newValue ) => {
		this.setState({ volume: newValue })

		const msg = "Listening to music at a high volume could cause long-term hearing loss."
		const msg2 = "Your music is now muted"


		if ( ( newValue > 60) && !this.state.notifications.includes( msg ) ) {
			this.addNotification( msg )
		}
		if ( ( newValue <= 60) && this.state.notifications.includes( msg ) ) {
			this.removeNotification( msg )
		}
			if ( ( newValue === 0) && !this.state.notifications.includes( msg2 ) ) {
				this.addNotification( msg2 )
			}
			if ( ( newValue > 0) && this.state.notifications.includes( msg2 ) ) {
				this.removeNotification( msg2 )
		}
	}

	sound = ( event ) => {
		this.setState({ quality: event.target.value })

		const msg = "Music quality is degraded. Increase quality if your connection allows it."
		const msg2 = "Prepare for some bad-ass high sound quality"
		
		
		if ( (event.target.value === 'low') && !this.state.notifications.includes( msg ) ) {
			this.addNotification( msg )
		}
		if ( (event.target.value !== 'low') && this.state.notifications.includes( msg ) ) {
			this.removeNotification( msg )
		}
		if ( (event.target.value === 'high') && !this.state.notifications.includes( msg2 ) ) {
			this.addNotification( msg2 )
		}
		if ( (event.target.value !== 'high') && this.state.notifications.includes( msg2 ) ) {
			this.removeNotification( msg2)
		}
	
	}


	

	



	render() {



		
		var cardStyle = {
			display: 'flex',
			width: '20vw',
			transitionDuration: '0.3s',
			height: '15vw',
			border: '1px solid black',
			outlinestyle: 'solid',
			outlinecolor: 'red'

		}
		  


		
		
		  

		return (
	

			<div className="dashboard-wrapper">

				<h1>Welcome!</h1>

           <div className="dashboard-row">
					
					<div className="dashboard-colume">

                         <Card elevation ={3} style={cardStyle} variant="outlined">
						 <Grid container
                            direction="row"
                             justify="center"
                             alignItems="center"
                                >
						<Online
							onlineState={this.state.online}
							onlineFunc={this.toggleOnline}>
						</Online>
						</Grid>
						</Card>
					</div>
				

					<div className="dashboard-col">

					<Card style={cardStyle} variant="outlined">
						<Grid container
  direction="row"
  justify="center"
  alignItems="center"
>
						<Volume
							volumeState={this.state.volume}
							volumeFunc={this.volume}>
						</Volume>
						</Grid>
						</Card>
					</div>

					<div className="dashboard-colume">
					<Card style={cardStyle} variant="outlined">
					<Grid container
  direction="row"
  justify="center"
  alignItems="center"
>
	    <Sound 
    qualityState={this.state.quality} 	
	qualityFunc={this.sound}>	
	    </Sound>
        			</Grid>
					</Card>
         					</div>

		</div>
				<div className="notifications">
					<h3>Notifications:</h3>
					{this.state.notifications.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>

			</div>
			
		)
	}
}
				
	

export default Dashboard;