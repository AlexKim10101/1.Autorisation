import React from 'react'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../Actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(AccessSelection);
