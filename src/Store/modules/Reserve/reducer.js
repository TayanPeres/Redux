/* reduce por padrao tem uma state e action,
action.type qual é essa açao,
case(caso seja ) add_reserve, vai return
caso n seja 14, returno outra coisa
...state está copiando tudo que está na state, 
e adicionando o action.trip 
Biblioteca immer => */ 


import produce from 'immer'

export default function reserve(state = [], action ) {
    switch(action.type) {
        case 'ADD_RESERVE_SUCESS':
 /* primeiro o state original, e depois draft que é  a copia */
            return produce(state, draft => {
 /* verificar se ja existe a passagem selecionada, se ja tiver soma +1 */
        const tripIndex = draft.findIndex(trip => trip.id === action.trip.id)
           /* se for maior ou igual a 0, vai ter um item la dentro */
            if(tripIndex >= 0) {
                draft[tripIndex].quantidade +=1
            } else {
                draft.push({
                    ...action.trip,
                    quantidade:1
            })
        }
    })   
    
       case 'REMOVE_RESERVE' :
           return produce(state, draft => {
/* vai buscar se tem algum id dentro da lista quando clicar,
    se tripindex for igual ou maior que zero, entao existe.
     se existe, splice exclui e passa a posição que esta dentro do tripindex
     e exclui o primeiro*/
     const tripIndex = draft.findIndex(trip => trip.id === action.id)
        if(tripIndex >= 0) {
            draft.splice(tripIndex, 1)
        }

           })
        case 'UPDATE_RESERVE': {
            if(action.quantidade <= 0) {
                return state
            }
            return produce(state, draft =>{
                /* buscou o produto que clicou */
             const tripIndex = draft.findIndex(trip => trip.id === action.id)
             /* achei o produto e cai dentro do if */
             if(tripIndex >= 0) {
                 /* substituo pelo que mandou number +1 ou -1  */
                 draft[tripIndex].quantidade = Number(action.quantidade)
             }
            })} 
         default:
             return state
    }
}