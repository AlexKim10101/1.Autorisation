import React from 'react'
import { container } from './sc'

import Infobases from './Infobases';
import Authentication from './Authentication'
import AccessSelection from './AccessSelection'
import ScreenSelection from './ScreenSelection'


// пример 2-го окна https://material-ui.com/getting-started/templates/sign-in/



export default function Boxes(props) {
	
	switch (props.step) {
	  case 0:
	    return <Infobases forwardStep={props.forwardStep} chooseInfo={props.chooseInfo}/>
	  case 1:
	    return <Authentication forwardStep={props.forwardStep} />
	  case 2:
	    return <AccessSelection forwardStep={props.forwardStep} />
	  case 3:
	    return <ScreenSelection forwardStep={props.forwardStep} chooseList={props.chooseList}/>          
	  case 4:
	    return <div>Авторизация пройдена</div>
	  default:
	  	return <div>Ошибка</div>
	}


}
