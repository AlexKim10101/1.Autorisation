import React from 'react'

const DATABASES = [{name: 'ЭР', description: 'описание не указано'},
	{name: 'ER_New', description: 'для переноса заказчику'},
	{name: 'FGC2', description: 'описание не указано'},
];


export default function Infobases(props) {

	function handleClick(id){
		props.forwardStep();
	}


	function renderInfoBasesList(){
		let list = null;
		console.log('asd');
		list = DATABASES.map((item) =>{
			console.log('ad');
			return <li onClick={handleClick}>{item.name}</li>
		})
		return list;
	}


	return (<ul className="databases-list">
		{renderInfoBasesList()}



	</ul>)

	

}