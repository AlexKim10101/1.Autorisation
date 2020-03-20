import React from 'react';
import {createStore} from 'redux';

import { connect } from 'react-redux'
import Boxes from './Boxes';
import {AUTH, STEP_UP, CHOOSE_INFO, CHOOSE_LIST, RESET} from './GlobalVariables';

//actions
function forwardStep(){
  return {type:STEP_UP}    
}

function chooseInfo(id){
  return {type:CHOOSE_INFO, id};
}

function chooseList(id){
  return {type:CHOOSE_LIST, id};
}

function reset(){
  return {type:RESET};
}

function App(props) {
  return (
    <div className="App">
      <div className="model">
        <pre>{JSON.stringify(props, null, 2)}</pre>        
      </div>
      <button className="button button--reset" value="RESET" onClick={props.reset}>RESET</button>
      <div className="wrapper">
        <Boxes step={props.step} 
          forwardStep={props.forwardStep} 
          chooseInfo={props.chooseInfo}
          chooseList={props.chooseList}
        />
      </div>
    </div>
  );
}


const mapStateToProps = store =>  {   
  return  {...store} 
}

const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
    chooseInfo: (id) => dispatch(chooseInfo(id)),
    chooseList: (id) => dispatch(chooseList(id)),
    reset: () => dispatch(reset()),      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
