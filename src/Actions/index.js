
import {AUTH, STEP_UP, CHOOSE_INFO, CHOOSE_LIST, RESET} from '../GlobalVariables';



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

export const mapStateToProps = store =>  {   
  return  {...store} 
}

export const mapDispatchToProps = dispatch => {
  return {
    forwardStep: () => dispatch(forwardStep()),
    chooseInfo: (id) => dispatch(chooseInfo(id)),
    chooseList: (id) => dispatch(chooseList(id)),
    reset: () => dispatch(reset()),  
  }
}