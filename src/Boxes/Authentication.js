import React from 'react';

export default class Authentication extends React.Component {
	constructor(props){
		super(props);
		this.state={
			login:null,
			passworg:null,
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event){
		const target = event.target;
    	const value = target.value;
    	const name = target.name;
    	this.setState({
      		[name]: value
    	});
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.forwardStep();
	}

	render(){
		return (<div className="container-form">
			<form className="registration-form" onSubmit={this.handleSubmit}>
				<input 
					type="text" 
					name="login"
					value={this.state.login} 
					onChange={this.handleInputChange}
					placeholder="login"></input>
				<input 
					type="text" 
					name="password"
					value={this.state.password} 
					onChange={this.handleInputChange}
					placeholder="password"></input>
				<input type="submit" value="Sing in"></input>
			</form>
		</div>)
	}
	
}

