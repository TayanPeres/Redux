/* configuração do redux 
   o Provider que está no App.js 
    colocando em volta de todos os componentes, esse Provider vai deixar o redux poder acessar
     e todos os componentes consigam acessar as propriedade do redux e etc 
     e esse Provider espera que passe uma store  */
import { createStore, applyMiddleware }from 'redux'
import rootReducer from './modules/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './modules/rootSaga'


const sagaMiddleware =  createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store