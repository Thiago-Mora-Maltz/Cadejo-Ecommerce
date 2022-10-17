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

  const registrarse = async (obj) => {
      await funciones.registrarse(obj, setUser, setError)
      .then(navigate('/'))
  }
  const logIn = async (obj) => {
      await funciones.logIn(obj, setUser)
      .then(navigate('/'))
  }
  return (
    <>
    {   pathname === '/login' ?
        <LogInForm  logIn={logIn}/>
        :
        <SignUpForm value={{registrarse: registrarse, signInWithGoogle: funciones.signInWithGoogle, error: error}}/>
    }
    </>
  )
}

export default FormContainer