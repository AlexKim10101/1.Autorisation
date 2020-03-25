import React from 'react';
import { connect } from 'react-redux'
import {forwardStep, chooseList} from '../Actions';

import scr1 from './scr1.png';
import scr2 from './scr2.png';


const SCREENSDATA = [{id:'1', name: 'Администратор', description: 'описание не указано' , url:scr1},
	{id:'2', name: 'Администратор', description: 'описание не указано' , url:scr2},
];

function ScreenSelection(props) {

	function handleClick(id){
		props.forwardStep(); 
		return props.chooseList(id);
	}

	function renderInfoBasesList(){
		return SCREENSDATA.map((item) =>{
			return (
				<li className="list__item" onClick={()=>handleClick(item.id)}>
					<img src={item.url} alt=""/>
				</li>
			)
		})
		 
	}

	return (<ul className="list list--screens">
		{renderInfoBasesList()}
	</ul>)

}

const mapStateToProps = store =>  {   
  return store.step;
}

const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
    chooseList: (id) => dispatch(chooseList(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenSelection);
