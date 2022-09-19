import React from 'react'
import { useContext } from "react"
import {CartContext} from '../context/CartContext'

function Cart() {
    const {cart} = useContext(CartContext)
    return (
    <>
        {cart.map(item => <h1>{item.nombre}, {item.cantidad}</h1>)}
    </>
  )
}

export default Cart