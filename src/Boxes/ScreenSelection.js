import React from 'react';
import scr1 from './scr1.png';
import scr2 from './scr2.png';


const SCREENSDATA = [{id:'1', name: 'Администратор', description: 'описание не указано' , url:scr1},
	{id:'2', name: 'Администратор', description: 'описание не указано' , url:scr2},
];


export default function ScreenSelection(props) {

	function handleClick(id){
		props.forwardStep(); 
		return props.chooseList(id);
	}

	function renderInfoBasesList(){
		return SCREENSDATA.map((item) =>{
			return (
				<li onClick={()=>handleClick(item.id)}>
					<img src={item.url} alt=""/>
				</li>
			)
		})
		 
	}

	return (<ul className="screen-list">
		{renderInfoBasesList()}
	</ul>)

}