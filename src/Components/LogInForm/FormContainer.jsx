import React from 'react'
import  * as funciones  from './loginFunctions'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import SignUpForm from './SignUpForm'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LogInForm from './LogInForm'

function FormContainer() {
  const [error, setError] = useState(false)
  const {pathname}  = useLocation()     
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const registrarse = (obj) => {
      funciones.registrarse(obj, setUser, setError)
      .then(navigate('/'))
  }
  const logIn = (obj) => {
      funciones.logIn(obj, setUser)
      .then(navigate('/'))
  }
  const signInWithGoogle = () => {
    funciones.signInWithGoogle()
    .then(navigate('/'))
  }
  return (
    <>
    {   pathname === '/login' ?
        <LogInForm  logIn={logIn} signInWithGoogle={signInWithGoogle}/>
        :
        <SignUpForm registrarse={registrarse} signInWithGoogle={signInWithGoogle} error={error}/>
    }
    </>
  )
}

export default FormContainer