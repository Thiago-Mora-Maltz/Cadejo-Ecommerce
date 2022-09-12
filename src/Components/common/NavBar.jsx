/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand nav-link" to='/'>Cadejo Vermú Latino</NavLink>
        <div className="">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to='/'>Agendar pedido</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/'>Menú</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/'><CartWidget/></NavLink>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  </>
}

export default NavBar
