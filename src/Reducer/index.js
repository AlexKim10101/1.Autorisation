import {AUTH, STEP_UP, CHOOSE_INFO, CHOOSE_LIST, RESET} from '../GlobalVariables';
import { initialState } from '../Store';

export function reducer(state, action) {
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