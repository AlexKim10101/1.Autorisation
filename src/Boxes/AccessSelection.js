import React from 'react'
import { connect } from 'react-redux'
import {forwardStep} from '../Actions';

const DATA = [{id:'1', name: 'Администратор', description: 'описание не указано'},
	
];


function AccessSelection(props) {

	function handleClick(id){
		props.forwardStep(); 
		
	}

	function renderInfoBasesList(){
		return DATA.map((item) =>{
			return <li onClick={()=>handleClick(item.id)}>{item.name}</li>
		})	 
	}

	return (<ul className="list list--access">
		{renderInfoBasesList()}
	</ul>)

}

const mapStateToProps = store =>  {   
  return  {...store} 
}

const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccessSelection);
