import React from 'react'
import { container } from './sc'

import Infobases from './Infobases'

// пример 2-го окна https://material-ui.com/getting-started/templates/sign-in/



export default function Boxes(props) {
	function foo(){
		props.forwardStep();
	}

	switch (props.step) {
	  case 0:
	    return <Infobases forwardStep={props.forwardStep} chooseInfo={props.chooseInfo}/>
	  case 1:
	    return <div>шаг2</div>
	  case 2:
	    return <div>шаг3</div>
	  case 3:
	    return <div>шаг4</div>          
	  case 4:
	    return <div>Авторизация пройдена</div>
	  default:
	  	return <div>Ошибка</div>
	}


}
