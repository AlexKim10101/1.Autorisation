import React, { useState } from 'react';
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../Actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Authentication(props){

	const [inputData, setInputData] = useState({email:'', password:'', memento: false});

	function handleInputChange(event){
		const target = event.target;
    	const value = target.name === 'memento' ? target.checked : target.value;
    	const name = target.name;
    	setInputData(Object.assign({}, inputData, {[name]: value}));
	}

	function handleSubmit(event){
		event.preventDefault();
		props.forwardStep();
		console.log(inputData);
	}

	return (
		<div className="container-form">
			<div className="title-form">Sing in</div>
			<form className="registration-form" onSubmit={handleSubmit}>
				<div className="input-wrapper">
					<TextField
			            variant="outlined"
			            margin="normal"
			            required
			            fullWidth
			            id="email"
			            label="Email Address"
			            name="email"
			            autoComplete="email"
			            autoFocus
			            value={inputData.login} 
						onChange={handleInputChange}
			          />					
				</div>
				<div className="input-wrapper">
					<TextField
			            variant="outlined"
			            margin="normal"
			            required
			            fullWidth
			            name="password"
			            label="Password"
			            type="password"
			            id="password"
			            autoComplete="current-password"
			            value={inputData.password} 
						onChange={handleInputChange}
			          />
					
				</div>
				<div className="input-wrapper">
					<FormControlLabel
			            control={<Checkbox 
			            	color="primary" 
			            	name ="memento" 
			            	value={inputData.memento} 
			            	onChange={handleInputChange}/>}
			            label="Remember me"
			            
						
			          />
				</div>
				<div className="input-wrapper">

					<Button
			            type="submit"
			            fullWidth
			            variant="contained"
			            color="primary"
			            
			        >
			        Sign In
			        </Button>
					
				</div>
			</form>
			<div className="container-links">
				<a className="link" href="#">Forgot password?</a>
				<a className="link" href="#">Don't have an account? Sign Up</a>
			</div>
		</div>)
	
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
