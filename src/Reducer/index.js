import {AUTH, STEP_UP, STEP_DOWN, CHOOSE_INFO, CHOOSE_LIST, CHOOSE_USER, RESET} from '../GlobalVariables';
import { initialState } from '../Store';

export function reducer(state, action) {
  switch (action.type) {
    case AUTH:
      return { ...state, isAuth: true }
    case STEP_UP:
      return { ...state, step: state.step + 1 }
    case STEP_DOWN:
      return { ...state, step: state.step - 1 }
    case CHOOSE_INFO:
      return { ...state, infobaseSelected: action.id }
    case CHOOSE_LIST:
      return { ...state, desktopSelected: action.id }
    case CHOOSE_USER:
      return { ...state, userSelected: action.id }
    case RESET:
      return initialState
    default:
      return state
  }
}