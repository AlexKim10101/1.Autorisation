import React, { useState } from 'react';

export default function(props){

	const [inputData, setInputData] = useState({login:'', password:'', memento: false});

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

	return (<div className="container-form">
		<div className="title-form">Sing in</div>
		<form className="registration-form" onSubmit={handleSubmit}>
			<input 
				className="registration-form__input"
				type="text" 
				name="login"
				value={inputData.login} 
				onChange={handleInputChange}
				placeholder="login"></input>
			
			<input 
				className="registration-form__input"
				type="text" 
				name="password"
				value={inputData.password} 
				onChange={handleInputChange}
				placeholder="password"></input>

			<div>
				<input
					type="checkbox"
					name="memento"
					value={inputData.memento}
					onChange={handleInputChange}></input>
				<span>Remember me</span>
			</div>

			<input 
				className="registration-form__input registration-form__input--submit"
				type="submit" 
				value="Sing in"></input>
		</form>
		<div className="container-links">
			<a className="link" href="#">Forgot password?</a>
			<a className="link" href="#">Don't have an account? Sign Up</a>
		</div>
	</div>)
	
	
}

