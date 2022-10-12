import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return <>
    <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand nav-link" to='/'>Cadejo Vermú Latino</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: 'rgb(31, 83, 31)'}}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent: 'end'}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={`/categoria/comida`} className="nav-link">Comidas</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/bebida`} className="nav-link">Bebidas</Link>
            </li>
            <li className="nav-item">
              <Link to={`/categoria/agendarPedido`} className="nav-link">Agendar pedido</Link>
            </li>
            <li className="nav-item">
              <Link to={`/`} className="nav-link">Menú</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/cart'><CartWidget/></Link>
            </li>
          </ul>
        </div>
  </nav>
  </>
}

export default NavBar

        // <div className='collapse navbar-collapse'id="navbarSupportedContent">
        //   <ul className="navbar-nav">
        //     <li className="nav-item">
        //       <Link to={`/categoria/comida`} className="nav-link">Comidas</Link>
        //     </li>
        //     <li className="nav-item">
        //       <Link to={`/categoria/bebida`} className="nav-link">Bebidas</Link>
        //     </li>
        //     <li className="nav-item">
        //       <Link to={`/agendarPedido`} className="nav-link" aria-current="page">Agendar pedido</Link>
        //     </li>
        //     <li className="nav-item">
        //       <Link className="nav-link" to='/'>Menú</Link>
        //     </li>
        //     <li className="nav-item">
        //       <Link className="nav-link" to='/cart'><CartWidget/></Link>
        //     </li>
        //   </ul>
        // </div>