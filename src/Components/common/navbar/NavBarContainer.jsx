import React from 'react'
import { getAuth, signOut} from 'firebase/auth'
import { useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'
import './navbar.css'
import NavBar from './NavBar'
function NavBarContainer() {
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

return(
    <>
        <NavBar logOut={logOut} user={user}/>
    </>
)
}

export default NavBarContainer