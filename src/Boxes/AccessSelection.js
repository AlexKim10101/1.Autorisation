import React from 'react'
import { connect } from 'react-redux'
import {forwardStep} from '../Actions';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const DATA = [{id:'1', name: 'Администратор', description: 'описание не указано'},
	{id:'2', name: 'Пользователь', description: 'описание не указано'}
];


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
  return  {...store} 
}

const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccessSelection);
