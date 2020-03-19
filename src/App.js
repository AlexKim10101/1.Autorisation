import React, { useReducer} from 'react';
import Boxes from './Boxes'

const initialState = {
  isAuth: false, // флаг авторизации (boolean), ставится true только после прохождения всех шагов авторизации
  step: 0, // шаг процесса авторизации (-выбор базы, -ввод логина и пароля, -выбор схемы, -выбор рабочего стола)
  infobasesList: null, // список информационных баз
  desktopsList: null, // список рабочих столов
}

const AUTH = 'AUTH'
const STEP_UP = 'STEP_UP'
const CHOOSE_INFO = 'CHOOSE_INFO'
const CHOOSE_LIST = 'CHOOSE_LIST'
const RESET = 'RESET' 

function reducer(state, action) {
  switch (action.type) {
    case AUTH:
      return { ...state, isAuth: true }
    case STEP_UP:
      return { ...state, step: state.step + 1 }
    case CHOOSE_INFO:
      return { ...state, infobasesList: action.id }
    case CHOOSE_LIST:
      return { ...state, desktopsList: action.id }
    case RESET:
      return initialState
    default:
      return state
  }
}


function App() {
  const [model, dispatch] = useReducer(reducer, initialState);

  function forwardStep(){
    dispatch({type:STEP_UP});
    
  }

  function chooseInfo(id){
    dispatch({type:CHOOSE_INFO, id});
  }

  function chooseList(id){
    dispatch({type:CHOOSE_LIST, id});
  }

  function reset(){
    dispatch({type:RESET});

  }

  
  
  return (
    <div className="App">
      <div className="model">
        <pre>{JSON.stringify(model, null, 2)}</pre>        
      </div>

      
      <button className="button button--reset" value="RESET" onClick={reset}>RESET</button>

      <div className="wrapper">
        <Boxes step={model.step} 
          forwardStep={forwardStep} 
          chooseInfo={chooseInfo}
          chooseList={chooseList}
        />
      </div>
      

    </div>
  );
}

export default App;
