import React from 'react'
import { connect } from 'react-redux'
import {forwardStep, chooseUser} from '../Actions';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

function AccessSelection(props) {

	function handleClick(id){
		props.forwardStep(); 
		props.chooseUser(id);
	}

	const DATA = props.users;
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
  return { users: store.usersList };
}

const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
    chooseUser: (id) => dispatch(chooseUser(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccessSelection);
