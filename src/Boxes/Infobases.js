import React from 'react'
import { connect } from 'react-redux'
import {forwardStep, chooseInfo} from '../Actions';

const DATABASES = [{id:'1', name: 'ЭР', description: 'описание не указано'},
	{id:'2', name: 'ER_New', description: 'для переноса заказчику'},
	{id:'3', name: 'FGC2', description: 'описание не указано'},

];

function Infobases(props) {

	function handleClick(id){
		props.forwardStep(); 
		return props.chooseInfo(id);
	}

	function renderInfoBasesList(){
		return DATABASES.map((item) =>{
			return <li onClick={()=>handleClick(item.id)}>{item.name}</li>
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
