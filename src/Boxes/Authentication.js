import React, { useState } from 'react';
import { connect } from 'react-redux'
import { forwardStep, backStep } from '../Actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { btn } from './sc';

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
			<div className="title-form">Авторизация</div>
			
			<form className="registration-form" onSubmit={handleSubmit} noValidate>
				<div className="input-wrapper">
					<TextField
			            variant="outlined"
			            margin="normal"
			            required
			            fullWidth
			            id="email"
			            label="Имя пользователя"
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
			            label="Пароль"
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
			            label="Запомнить меня"	            	
			        />
				</div>
				<div className="input-wrapper input-wrapper--submit">
					<Button
					 	onClick={props.backStep}
            css={btn}
            fullWidth
            variant="contained"
            color="primary"         
		        >
		        Назад
		      </Button>	
					<Button
						css={btn}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"            
	        >
	        Войти
	        </Button>	
			        			
				</div>
			</form>
			<div className="container-links">
				<a className="link" href="#">Забыли пароль?</a>
				<a className="link" href="#">Зарегистрироваться</a>
			</div>
		</div>)
	
	
}


const mapStateToProps = store =>  {   
  return  store.step 
}

const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
    backStep: () => dispatch(backStep()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
