import React from 'react'
import { connect } from 'react-redux'
import {forwardStep, chooseInfo} from '../Actions';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function Infobases(props) {

	function handleClick(id){
		props.forwardStep(); 
		return props.chooseInfo(id);
	}

	function renderInfoBasesList(){
		const DATABASES = props.infoBases;
		return DATABASES.map((item) =>{
			return (
				<li className="list__item" onClick={()=>handleClick(item.id)}>
					<div>{item.name}</div>
					<KeyboardArrowRight/>
				</li>)
		})
		 
	}

	return (
		<ul className="list list--databases">
			{renderInfoBasesList()}
		</ul>
	)
}


const mapStateToProps = store =>  {   
  return {step:store.step, infoBases:store.infoBases};
}

const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
    chooseInfo: (id) => dispatch(chooseInfo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Infobases);
