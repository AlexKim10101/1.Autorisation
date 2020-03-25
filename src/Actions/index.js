
import {AUTH, STEP_UP, STEP_DOWN, CHOOSE_INFO, CHOOSE_LIST, RESET} from '../GlobalVariables';



//actions
export function forwardStep(){
  return {type:STEP_UP}    
}

export function backStep(){
  return {type:STEP_DOWN}    
}

export function chooseInfo(id){
  return {type:CHOOSE_INFO, id};
}

export function chooseList(id){
  return {type:CHOOSE_LIST, id};
}

export function reset(){
  return {type:RESET};
}

