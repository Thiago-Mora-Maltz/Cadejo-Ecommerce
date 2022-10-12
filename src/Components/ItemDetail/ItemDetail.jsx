import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../common/ItemCount'
import {CartContext} from '../context/CartContext'

function ItemDetail({item}) {
  const [cantidad, setCantidad] = useState(0)
  const [carrito, setCarrito] = useState(true)
  const {addToCart} = useContext(CartContext)
  const onAdd = (valor) => {
    setCantidad(valor)
    addToCart(item, valor)
    setCarrito(false)
  }

  return (
    <>
    <div className='row'>
      <div className='col-lg-4 col-sm-12 col-12 centrar mb-4'>
        <img src={item.imagen} alt={item.descripcion} style={{height: '450px', width: '100%'}}/>
      </div>
      <div className="col-lg-8 col-sm-12 col-12 display-column">
        <h2>{item.nombre}</h2>
        <h4>{item.descripcion}</h4>
        <h5 className='mb-4'>{item.precio}</h5>
        {carrito ? <ItemCount stock={item.stock} initial = {0} onAdd={onAdd}/> : <Link style={{textDecoration: 'none'}} to='/cart'>Ir al carrito</Link>}
      </div>
    </div>
    </>
  )
}

export default ItemDetail