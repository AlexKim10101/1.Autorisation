import React from 'react'
import { connect } from 'react-redux'
import {forwardStep} from '../Actions';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { createUsers, USERS_QUANTITY } from '../GlobalVariables';


const DATA = createUsers(USERS_QUANTITY);


function AccessSelection(props) {

	function handleClick(id){
		props.forwardStep(); 
		
	}

	function renderInfoBasesList(){
		return DATA.map((item) =>{
			return <li className="list__item" onClick={()=>handleClick(item.id)}>
				<div>{item.name}</div>
				<KeyboardArrowRight/>
			</li>
		})	 
	}

	return (<ul className="list list--access">
		{renderInfoBasesList()}
	</ul>)

}

const mapStateToProps = store =>  {   
  return store.step;
}

const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccessSelection);
