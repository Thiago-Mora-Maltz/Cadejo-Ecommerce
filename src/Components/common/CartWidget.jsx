import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useState } from 'react'
import { useEffect } from 'react'

function CartWidget() {
  const {sumaProductosCart} = useContext(CartContext)
  const [cantProductos, setCantProductos] = useState()
  useEffect(() => setCantProductos(sumaProductosCart()))
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping} />
      {cantProductos === 0 ? '' :<span>{cantProductos}</span>}
    </>
  )
}

export default CartWidget