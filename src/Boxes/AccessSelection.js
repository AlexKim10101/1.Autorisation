import React from 'react'

const DATA = [{id:'1', name: 'Администратор', description: 'описание не указано'},
	
];


export default function AccessSelection(props) {

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