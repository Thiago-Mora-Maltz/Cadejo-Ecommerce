import React from 'react'

function ItemCount({stock, onAdd, resta, suma, valor, handleOnChange}) {
  return (
    <>
        <div className="btn-group mb-4" role="group">
            <button type="button" className={`button ${stock <= 0 ? `disabled` : ''}`} onClick={resta} >-1</button>
            <input type='text' value={Number(valor)} onChange={handleOnChange} disabled={stock <= 0 ? 'disabled' : ''} />
            <button type="button" className={`button ${stock <= 0 ? `disabled` : ''}`} onClick={suma}>+1</button>
        </div>  
            <button className='button' onClick={()=>onAdd(valor)}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount