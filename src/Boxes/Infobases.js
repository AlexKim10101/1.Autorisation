import React from 'react'
import { connect } from 'react-redux'
import {forwardStep, chooseInfo} from '../Actions';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const DATABASES = [{id:'1', name: 'Infobase 1', description: 'описание не указано'},
	{id:'2', name: 'Infobase 2', description: 'для переноса заказчику'},
	{id:'3', name: 'Infobase 3', description: 'описание не указано'},

];

function Infobases(props) {

	function handleClick(id){
		props.forwardStep(); 
		return props.chooseInfo(id);
	}

	function renderInfoBasesList(){
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
  return  {...store} 
}

const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
    chooseInfo: (id) => dispatch(chooseInfo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Infobases);
