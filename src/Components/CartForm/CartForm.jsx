import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
function CartForm( {sendOrder, ordenId} ) {
  const { register, handleSubmit, formState: {errors}, reset} = useForm()
  useEffect(() => reset(), [sendOrder, reset])
  return (
    <>
            <form className='form' onSubmit={handleSubmit(sendOrder)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder={'Enrique'} {...register('nombre', {required: true})}/>
                        {errors.nombre && <span className='text-danger'>El campo es obligatorio</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder={'xxxxxx@gmail.com'} {...register('email', {required: true})}/>
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Celular</label>
                        <input type="text" className="form-control" id="celular" placeholder={'11******76'} {...register('celular', {required: true, pattern: /\d{10}/ })}/>
                        {errors.celular && <span className='text-danger'>El campo es obligatorio</span>}
                    </div>
                    <button type='submit' className="button">Generar orden</button>
            </form>
            {ordenId && <h1>Compra realizada exitosamente! Código de orden: {ordenId}</h1>}
    </>
  )
}

export default CartForm