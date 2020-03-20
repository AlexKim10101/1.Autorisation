import {AUTH, STEP_UP, CHOOSE_INFO, CHOOSE_LIST, RESET} from '../GlobalVariables';
import { initialState } from '../Store';

// const initialState = {
//   isAuth: false, // флаг авторизации (boolean), ставится true только после прохождения всех шагов авторизации
//   step: 0, // шаг процесса авторизации (-выбор базы, -ввод логина и пароля, -выбор схемы, -выбор рабочего стола)
//   infobasesList: null, // список информационных баз
//   desktopsList: null, // список рабочих столов
// }

export function reducer(state, action) {
  console.log(state, action);
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