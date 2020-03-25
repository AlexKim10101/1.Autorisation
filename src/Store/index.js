
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from '../Reducer'
import { INFOBASES_QUANTITY, USERS_QUANTITY, createInfoBases, createUsers} from '../GlobalVariables'



// const infoBases = createInfoBasesData(INFOBASES_QUANTITY);
// const users = createUsers(USERS_QUANTITY)
export const initialState = {
  isAuth: false, // флаг авторизации (boolean), ставится true только после прохождения всех шагов авторизации
  step: 0, // шаг процесса авторизации (-выбор базы, -ввод логина и пароля, -выбор схемы, -выбор рабочего стола)
  infobaseSelected: null, // id выбранной базы
  desktopSelected: null, // id выбранного стола
  userSelected: null, // id выбранного пользователя
  infoBases: createInfoBases(INFOBASES_QUANTITY), // список информационных баз
  usersList: createUsers(USERS_QUANTITY), // список информационных пользователей
}



export const store = createStore(reducer, initialState, devToolsEnhancer(),);