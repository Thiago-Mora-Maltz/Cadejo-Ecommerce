import React from 'react'
import { useContext } from "react"
import {CartContext} from '../context/CartContext'
import CartDetail from './CartDetail'

function Cart() {
    const {cart, sumaProductosCart, sumaPrecioCart} = useContext(CartContext)

    return (
    <>
      {
        cart.length > 0  ?
        <div className='row justify-content-center cart-row'>
          <ul className='cartItems'>
            {cart.map(item => <CartDetail key={item.id} item={item}/> )}
            <li className="list-group-item" style={{textAlign: 'end'}}>Cantidad productos: {sumaProductosCart()}</li>
            <li className="list-group-item" style={{textAlign: 'end'}}>Precio total: {sumaPrecioCart()}</li>
          </ul>
        </div>
        :
        <h1>No hay productos agregados 😐</h1>  
      }
       
    </>
  )
}

export default Cart