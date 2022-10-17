import React from 'react'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { getAuth, signOut} from 'firebase/auth'
import { useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'
import './navbar.css'
function NavBar() {
  const { user, setUser } = useContext(UserContext)
  const auth = getAuth();
  const logOut = async () => {
  await signOut(auth)
  .then(() => {
    localStorage.removeItem('user')
    return setUser(localStorage.getItem('user'))
  })
  .catch((err) => console.error(err))
  }
  useEffect(() => {
    localStorage.getItem('user')
  }, [user])

return <>
    <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent: 'space-between'}}>
        <Link className="navbar-brand" to='/'>Cadejo Vermú Latino</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: 'rgb(31, 83, 31)'}}/>
        </button>
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
            <li className="nav-item">
              <Link to={`/categoria/agendarPedido`} className="nav-link">Agendar pedido</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {
              user ? 
              <li className="nav-item">
                <button className='nav-link btn btn-outline-secondary' onClick={logOut}>Cerrar sesion</button>
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
  </nav>
  </>
}

export default NavBar