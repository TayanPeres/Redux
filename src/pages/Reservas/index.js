import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import { RemoveReserve, udpdateQuantReserve} from '../../Store/modules/Reserve/actions'

export default function Reservas() {
  const reserves = useSelector(state => state.reserve)
  const dispatch = useDispatch()


  function handleDelete(id) {
    dispatch(
      RemoveReserve(id))
     
  }
  function decrementQuant(trip) {
    dispatch(udpdateQuantReserve(trip.id, trip.quantidade -1))
  }
  function incrementQuant(trip) {
    dispatch(udpdateQuantReserve(trip.id, trip.quantidade +1))
  }
 return (
   <div>
       <h1 className="title">Você solicitou {reserves.length} reservas </h1>

        {reserves.map(reserve => (
           <div  className="reservas" key={reserve.id}> 
           <img 
            src={reserve.image}
            alt={reserve.title}
            />
            <strong>{reserve.title}</strong>

            <div id="quant">
              <button type="button" onClick={() => decrementQuant(reserve)}>
                <MdRemoveCircle size={25} color="#191919" />
              </button>
              <input tyle="text" readOnly value={reserve.quantidade} />
              <button type="button" onClick={() => incrementQuant(reserve)}>
                <MdAddCircle size={25} color="#191919" />
              </button>  
            </div>

          <button 
            type="button"
            onClick={() => { handleDelete(reserve.id)}}
         >
           <MdDelete size={20} color="#191919" />
         </button>
       </div>

        ))} 

       <footer>
         <button type="button">Solicitar Reservas</button>
       </footer>
   </div>
 );
}