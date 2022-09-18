import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../common/ItemCount'

function ItemDetail({item}) {
  const [cantidad, setCantidad] = useState(0)
  const [carrito, setCarrito] = useState(true)

  const onAdd = (valor) => {
    console.log(valor);
    setCantidad(valor)
    setCarrito(false)
  }

  return (
    <>
    <div className='row'>
      <div className='col-4 centrar'>
        <img src={item.imagen} alt={item.descripcion} style={{height: '450px', width: '100%'}}/>
      </div>
      <div className="col-8 display-column">
        <h2>{item.nombre}</h2>
        <h4>{item.descripcion}</h4>
        <h5>{item.precio}</h5>
        {carrito ? <ItemCount stock={item.stock} initial = {0} onAdd={onAdd}/> : <Link to='/cart'>Ir al carrito</Link>}
        <h5>{cantidad}</h5>
      </div>
    </div>
    </>
  )
}

export default ItemDetail