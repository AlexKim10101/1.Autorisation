import React from 'react'
import { container } from './sc'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../Actions';

import Infobases from './Infobases';
import Authentication from './Authentication'
import AccessSelection from './AccessSelection'
import ScreenSelection from './ScreenSelection'

// пример 2-го окна https://material-ui.com/getting-started/templates/sign-in/

function Boxes(props) {
	
	switch (props.step) {
	  case 0:
	    return <Infobases />
	  case 1:
	    return <Authentication />
	  case 2:
	    return <AccessSelection />
	  case 3:
	    return <ScreenSelection />          
	  case 4:
	    return <div>Авторизация пройдена</div>
	  default:
	  	return <div>Ошибка</div>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Boxes);
