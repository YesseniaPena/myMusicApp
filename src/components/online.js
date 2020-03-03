import React from 'react';
import { FormControlLabel, FormGroup, Switch, } from '@material-ui/core';

const OnlineSwitch = props => (

	<div>
		<h2>Online</h2>
		<div className="m-t">
			<FormGroup>
				<FormControlLabel
					control={
						<Switch 
							checked={props.onlineState} 
							onChange={props.onlineFunc} 
						/>}
					label="Online"
				/>
			</FormGroup>
		</div>
	</div>

)

export default OnlineSwitch;