import React from 'react'
import  * as funciones  from './loginFunctions'
import { useForm } from 'react-hook-form'


function LogInForm( { logIn } ) {
    const { register, handleSubmit, formState: {errors}} = useForm()

    return (
    <>
        <form className='form' onSubmit={handleSubmit(logIn)}>
        <div className="mb-3">
            <label htmlFor="email1" className="form-label">Correo</label>
            <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" {...register('email1', {required: true})}/>
            {errors.email1 && <span className='text-danger'>El campo es obligatorio</span>}
        </div>
        <div className="mb-3">
            <label htmlFor="password1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" {...register('password', {required: true})}/>
            {errors.password && <span className='text-danger'>El campo es obligatorio</span>}
        </div>
        <button className='mb-3 btn btn-outline-primary' onClick={funciones.signInWithGoogle}>Ingresar con Google</button> <br/>
        <button className="button" type='submit'>Iniciar sesion</button>
        </form>
    </>
  )
}

export default LogInForm