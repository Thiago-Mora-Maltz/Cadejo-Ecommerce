import React from 'react'
import CartList from './CartList'
import { useContext } from "react"
import {CartContext} from '../context/CartContext'
function CartListContainer() {
    const { cart, sumaProductosCart, sumaPrecioCart, removeItem} = useContext(CartContext)
    return (
    <>
        <CartList context={{cart: cart, sumaPrecioCart: sumaPrecioCart, sumaProductosCart: sumaProductosCart, removeItem: removeItem}}/>
    </>
  )
}

export default CartListContainer