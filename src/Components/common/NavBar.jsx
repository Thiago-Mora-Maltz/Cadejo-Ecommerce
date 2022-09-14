/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
  return <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand nav-link" to='/'>Cadejo Vermú Latino</Link>
        <div className="">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={`/categoria/comida`} className="nav-link">Comidas</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/bebida`} className="nav-link">Bebidas</Link>
            </li>
            <li className="nav-item">
              <Link to={`/agendarPedido`} className="nav-link" aria-current="page">Agendar pedido</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'>Menú</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/'><CartWidget/></Link>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  </>
}

export default NavBar
