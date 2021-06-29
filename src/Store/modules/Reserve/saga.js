/* n pode fazer api.get dentro do saga, é importando o call,
yield é igual o await
ele ta pegando todo id 
para desparar actions no saga é o put 
all é ficar ouvindo , takeLatest(so faz o ultimo clique ou ultima requisiçao para n clicar muitas vezes) */

import api from '../../../services/api'
import {addReserveSucess } from './actions'
import { call, put, all, takeLatest } from 'redux-saga/effects'

function* addToReserve({id}) {
    const response = yield call(api.get `trips/${id}`)
/* dispara a actions e o reduce vai receber tudo */
    yield put(addReserveSucess(response.data))

}
export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve )
])