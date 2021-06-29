/* vai combinar todos os reducers que passar pra ele,
    pra poder carregar todos na aplicaçao */

import { combineReducers } from 'redux'
import reserve from '../modules/Reserve/reducer'
/* se tivesse um de user, seria aqui, import users ./users/reducer */ 

export default combineReducers({
    reserve,
})