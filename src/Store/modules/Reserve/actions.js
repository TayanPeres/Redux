/* espera que manda uma trip , quem vai ouvir é o reducer */
export function addReserveSucess(trip) {
    return {
        /* parametro obrigario que precisa passar pra disparar uma função, precisa ter um type,
        e depois passar o esta recebendo por parametro(trip),
        onde vai entender e  reeceber esse ADD_reserver, pra poder pegar o dado que esta mandando(trip)
        é no reducer */
              type: 'ADD_RESERVE_SUCESS',
              id
        
            }
}
 /* quem vai ouvit é o saga */
export function addReserveRequest(id) {
    return {
        type: 'ADD_RESERVE_REQUEST',
        id
    }
}
export function RemoveReserve(id) {
    return {
        type: 'REMOVE_RESERVE',
        id
    }
}
export function udpdateQuantReserve(id, quantidade) {
    return {
        type: 'UPDATE_RESERVE',
        id, quantidade
    }
}