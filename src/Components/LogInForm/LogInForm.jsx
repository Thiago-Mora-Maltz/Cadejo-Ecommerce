import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import { registrarse, signInWithGoogle, logIn } from './loginFunctions'
import  * as funciones  from './loginFunctions'

import { UserContext } from '../context/UserContext'
import { useContext } from 'react'

function LogInForm() {
    const [correo1, setCorreo1] = useState('')
    const [correo2, setCorreo2] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const {pathname}  = useLocation()     
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const registrarse = async (e) => {
        await funciones.registrarse(e, correo1, correo2, password, setUser, setError)
        .then(navigate('/'))
    }
    const logIn = async (e) => {
        await funciones.logIn(e, correo1, password, setUser)
        .then(navigate('/'))
    }

    return (
        <>
    {   pathname === '/login' ?
        <form className='form'>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setCorreo1(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className='mb-3 btn btn-outline-primary' onClick={funciones.signInWithGoogle}>Ingresar con Google</button> <br/>
        <button className="button" onClick={(e)=> logIn(e, correo1, password, setUser)}>Iniciar sesion</button>
        </form>
        :
        <form className='form'>
        <div className="mb-3">
            <label htmlFor="inputEmail1" className="form-label">Correo</label>
            <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" onChange={(e) => setCorreo1(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputEmail2" className="form-label">Correo</label>
            <input type="email" className="form-control" id="inputEmail2" aria-describedby="emailHelp" onChange={(e) => setCorreo2(e.target.value)}/>
        </div>
        {error ? <span className='text-danger'>Los correos no coinciden</span> : ''}
        <div className="mb-3">
            <label htmlFor="inputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="inputPassword1" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className='mb-3 btn btn-outline-primary' onClick={funciones.signInWithGoogle}>Registrarse con Google</button> <br/>
        <button onClick={(e)=> registrarse(e, correo1, correo2, password, setUser, setError)} className="button">Registrarse</button>
        </form>
    }
    </>
  )
}

export default LogInForm
// const auth = getAuth();

// const registrarse = async (e)  => {
//     e.preventDefault()
//     return correo1 === correo2 ? await createUserWithEmailAndPassword(auth, correo1, password)
//     .then((userCredential) => {
//         const correoUser =  JSON.stringify(userCredential.user.email)
//         localStorage.setItem('user', correoUser);
//         setUser(correoUser)
//   }).then(() => navigate('/'))
//     .catch((err) => {
//         alert('email already in use')
//         console.error(err)
//     })
//      :
//      setError(true)
// }

// const logIn = async (e) => {
//     e.preventDefault()
//     return await (signInWithEmailAndPassword(auth, correo1, password)
//     .then((userCredential) => {
//         const correoUser =  JSON.stringify(userCredential.user.email)
//         localStorage.setItem('user', correoUser);
//         setUser(correoUser)      }).then(() => navigate('/'))
//     .catch((err) => {
//         console.error(err)
//         alert('usuario no existente')
//     }))
// }

// const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider()
//     signInWithPopup(auth, provider)
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err)
// });
// }