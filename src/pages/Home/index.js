import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux'
import api from '../../services/api'
import { MdFlightTakeoff} from 'react-icons/md'
import './styles.css'
import { addReserveRequest} from '../../Store/modules/Reserve/actions';

export default function Home() {
  /* useDispatch vai ser responsavel por disparar uma ação pro redux */
  const dispatch = useDispatch()
  /* trip pega tudo que tem na api e setTript armazena tudo que receber da api 
      e vai começar com array vazio */
  const [trips, setTrips] = useState([])


  useEffect(() => {
    /* chamada api */
    async function loadApi() {
      /* get ta acessando a roda trip que recebe tudo que tem na api  */
      const response = await api.get('trips')
      /* response.data que vai receber toda a resposta da api e colocar dentro da setTrips */
      /* linha 30 mapeou tudo que tem na trips(api),  */
      setTrips(response.data)
    }

    loadApi() 

  }, [])

  /* recebendo trip que é a viagem que clicar,
    e agora passe pro redux. dispare uma ação pro redux(dispatch)   */
  function handleAdd(id) {
    dispatch(addReserveRequest(id))
   }

    return (
      <div>
       <div className="box">
         
         {trips.map(trip => (
           <li key={trips.id}>
             <img src={trip.image} alt={trip.title} />
             <strong>{trip.title}</strong>
             <span> Status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
            
             <button
             type="button"
             onClick={() => {
               /* criando uma função, e dentro dela vai passar todo conteudo da viagem, que está dentro 
                da trip na linha 34 */
               handleAdd(trip.id)
             }}
             >
               <div>
                 <MdFlightTakeoff size={16} color="#FFF" />
               </div>
               <span>SOLICITAR RESERVA</span>
             </button>
           </li>
         ))}
       </div>
   </div>
 );
}