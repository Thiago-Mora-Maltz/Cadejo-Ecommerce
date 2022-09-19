import React, { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {
  let [valor, setValor] = useState(initial)

  const suma = () => {
    if(valor < stock && valor >= 0){
        setValor(valor+1 )
    }else{
        alert('no hay más stock disponible.')
    }

  }
  const resta = () => {
    if(valor <= stock && valor > 0){
        setValor(valor-1)
    }else{
        alert('no hay más stock disponible.')
    }
  }
  const handleOnChange = (e) => {
    const nuevoValor = Number(e.target.value)
    nuevoValor <= 10 && nuevoValor >= 0 ? setValor(nuevoValor) : alert('no hay más stock disponible.')

  }


  return (
    <>
        <div className="btn-group" role="group">
            <button type="button" className={`btn btn-outline-secondary ${stock <= 0 ? `disabled` : ''}`} onClick={resta} >-1</button>
            <input type='text' value={Number(valor)} onChange={handleOnChange} disabled={stock <= 0 ? 'disabled' : ''} />
            <button type="button" className={`btn btn-outline-secondary ${stock <= 0 ? `disabled` : ''}`} onClick={suma}>+1</button>
            <button className='btn btn-outline-primary' onClick={()=>onAdd(valor)}>Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemCount