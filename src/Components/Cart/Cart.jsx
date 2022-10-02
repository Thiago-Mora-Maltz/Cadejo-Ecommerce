import React from 'react'
import { useContext } from "react"
import CartFrom from '../CartFrom'
import {CartContext} from '../context/CartContext'
import CartDetail from './CartDetail'
import { useState } from 'react'

function Cart() {
    const {cart, sumaProductosCart, sumaPrecioCart, clearCart} = useContext(CartContext)
    const [ordenId, setOrdenId] = useState("");

    const handleId = (id) => {
      setOrdenId(id);
  };

      // const date = new Date()
      // const fecha = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    
    return (
    <>
      {
        cart.length > 0  ?
        <div className='row justify-content-center'>
          <ul style={{width: '70%'}}>
            {cart.map(item => <CartDetail key={item.id} item={item}/> )}
            <li className="list-group-item" style={{textAlign: 'end'}}>Cantidad productos: {sumaProductosCart()}</li>
            <li className="list-group-item" style={{textAlign: 'end'}}>Precio total: {sumaPrecioCart()}</li>
          </ul>
          <CartFrom handleId={handleId} cart={cart} sumaPrecioCart={sumaPrecioCart} clearCart={clearCart}/>
        </div>
        :
        ordenId ? <h1>{ordenId}</h1> :<h1>No hay productos agregados 😐</h1>  
      }
       
    </>
  )
}

export default Cart