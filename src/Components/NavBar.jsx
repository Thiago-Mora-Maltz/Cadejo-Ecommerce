/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import CartWidget from './CartWidget'


function NavBar() {
  return <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand nav-link" href="#">Cadejo Vermú Latino</a>
        <div className="">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Agendar pedido</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menú</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><CartWidget/></a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  </>
}

export default NavBar
