
import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from '../Reducer'

export const initialState = {
  isAuth: false, // флаг авторизации (boolean), ставится true только после прохождения всех шагов авторизации
  step: 0, // шаг процесса авторизации (-выбор базы, -ввод логина и пароля, -выбор схемы, -выбор рабочего стола)
  infobasesList: null, // список информационных баз
  desktopsList: null, // список рабочих столов
}



export const store = createStore(reducer, initialState, devToolsEnhancer(),);