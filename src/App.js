import React from 'react';
//import {createStore} from 'redux';

import { connect } from 'react-redux'
import Boxes from './Boxes';
import {AUTH, STEP_UP, CHOOSE_INFO, CHOOSE_LIST, RESET} from './GlobalVariables';


export default function App(props) {
  return (
    <div className="App">
      <div className="wrapper">
        <Boxes />
      </div>
    </div>
  );
}
