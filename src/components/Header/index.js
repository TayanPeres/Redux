import React from 'react';
import { useSelector } from 'react-redux'
import { Link  } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './styless.css'


export default function Header() {
  /* useSelector é responsavel por conectar o redux com os nossos reducers 
    state.reserve(reserve é o nome do reducer)  */
  const reserveSize = useSelector(state => state.reserve)
 return (
   <header className="container">
        <Link to="/">
         <img className="logo" src={logo} alt="Logo Projeto" />
        </Link>

        <Link className="reserva" to="/reservas">
          <div>
            <strong>Minhas reservas</strong>
            <span>{reserveSize.length}</span>
          </div>
        </Link>

   </header>
 );
}