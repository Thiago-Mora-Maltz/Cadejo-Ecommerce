import React from 'react'
import { Link } from 'react-router-dom'
import ItemCountContainer from '../common/ItemCount/ItemCountContainer'

function ItemDetail({item, carrito, onAdd}) {

  return (
    <>
    <div className='row'>
      <div className='col-lg-4 col-sm-12 col-12 centrar mb-4'>
        <img src={item.imagen} alt='' style={{height: '450px', width: '100%'}}/>
      </div>
      <div className="col-lg-8 col-sm-12 col-12 display-column">
        <h2>{item.nombre}</h2>
        <h4>{item.descripcion}</h4>
        <h5 className='mb-4'>{item.precio}</h5>
        {carrito ? <ItemCountContainer stock={item.stock} initial = {0} onAdd={onAdd}/> : <Link style={{textDecoration: 'none'}} to='/cart'>Ir al carrito</Link>}
      </div>
    </div>
    </>
  )
  
}

export default ItemDetail