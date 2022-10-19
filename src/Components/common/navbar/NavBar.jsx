import React from 'react'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
function NavBar( {user, logOut} ) {

return <>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to={'/'}>Cadejo Vermú Latino</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: '#079d5c'}}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: 'end'}}>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={`/categoria/comida`}>Comidas</Link></li>
              <li><Link className="dropdown-item" to={`/categoria/bebida`}>Bebidas</Link></li>
            </ul>
          </li>
          <li className="nav-item">
              <Link to={`/menu`} className="nav-link">Menú</Link>
          </li>
        </ul>
          <ul className="navbar-nav">
          {
            user ? 
              <li className="nav-item">
                <button className='nav-link logOut' onClick={logOut}>Cerrar sesion</button>
              </li>
              :
              <>
                <li className="nav-item">
                  <Link to={`/login`} className="nav-link">Iniciar Sesion</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/registrarse`} className="nav-link">Registrarse</Link>
                </li>
              </>
            }
            <li className="nav-item">
              <Link className="nav-link" to='/cart'><CartWidget/></Link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
}

export default NavBar