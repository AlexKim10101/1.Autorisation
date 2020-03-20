import React, { useState } from 'react';

//export default class Authentication extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state={
	// 		login:null,
	// 		passworg:null,
	// 	}
	// 	this.handleInputChange = this.handleInputChange.bind(this);
	// 	this.handleSubmit = this.handleSubmit.bind(this);
	// }
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
		<form className="registration-form" onSubmit={handleSubmit}>
			<input 
				type="text" 
				name="login"
				value={inputData.login} 
				onChange={handleInputChange}
				placeholder="login"></input>
			<div>
				<input
					type="checkbox"
					name="memento"
					value={inputData.memento}
					onChange={handleInputChange}></input>
				<span>Remember me</span>
			</div>
			<input 
				type="text" 
				name="password"
				value={inputData.password} 
				onChange={handleInputChange}
				placeholder="password"></input>
			<input type="submit" value="Sing in"></input>
		</form>
	</div>)
	
	
}

