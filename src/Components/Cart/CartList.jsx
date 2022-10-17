import React from 'react'
import CartDetail from './CartDetail'
import './cart.css'
import { useNavigate } from 'react-router-dom'

function Cart( {context} ) {
    const { cart, sumaPrecioCart, sumaProductosCart, removeItem } = context
    const navigate = useNavigate() 
    return (
    <>
      {
        cart.length > 0  ?
        <div className='row justify-content-center cart-row'>
          <ul className='cartItems'>
            {cart.map(item => <CartDetail key={item.id} item={item} removeItem={removeItem}/> )}
            <li className="list-group-item" style={{textAlign: 'end'}}>Cantidad productos: {sumaProductosCart()}</li>
            <li className="list-group-item" style={{textAlign: 'end'}}>Precio total: {sumaPrecioCart()}</li>
            <button className='btn button' onClick={() => navigate('/cartForm')}>Realizar compra</button>
          </ul>
        </div>
        :
        <h1>No hay productos agregados 😐</h1>  
      }
       
    </>
  )
}

export default Cart