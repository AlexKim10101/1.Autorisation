import React from 'react'

const DATABASES = [{id:'1', name: 'ЭР', description: 'описание не указано'},
	{id:'2', name: 'ER_New', description: 'для переноса заказчику'},
	{id:'3', name: 'FGC2', description: 'описание не указано'},

];


export default function Infobases(props) {

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