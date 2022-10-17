import React from 'react'
import { useForm } from 'react-hook-form'

function SignUpForm( { registrarse, signInWithGoogle, error } ) {
    const { register, handleSubmit, formState: {errors}} = useForm()

    return (
    <>
        <form className='form' onSubmit={handleSubmit(registrarse)}>
        <div className="mb-3">
            <label htmlFor="email1" className="form-label">Correo</label>
            <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" {...register('email1', {required: true})}/>
            {errors.email1 && <span className='text-danger'>El campo es obligatorio</span>}
        </div>
        <div className="mb-3">
            <label htmlFor="email2" className="form-label">Correo</label>
            <input type="email" className="form-control" id="email2" aria-describedby="emailHelp" {...register('email2', {required: true})}/>
            {errors.email2 && <span className='text-danger'>El campo es obligatorio</span>}
        </div>
        {error && <span className='text-danger'>Los correos no coinciden</span>}
        <div className="mb-3">
            <label htmlFor="password1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password1" {...register('password', {required: true})}/>
            {errors.password && <span className='text-danger'>El campo es obligatorio</span>}
        </div>
        <button className='mb-3 btn btn-outline-primary' onClick={() => signInWithGoogle()}>Registrarse con Google</button> <br/>
        <button type='submit' className="button">Registrarse</button>
        </form>
    </>
  )
}

export default SignUpForm