import { getDoc, doc } from 'firebase/firestore'
import React,  {useState, useContext } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebaseConfig'
import Spinner from '../common/Spinner'
import ItemDetail from './ItemDetail'
import {CartContext} from '../context/CartContext'

function ItemDetailContainer() {
  const {addToCart} = useContext(CartContext)
  const [item, setItem] = useState([])
  const [cargando, setCargando] = useState(true)
  const [carrito, setCarrito] = useState(true)
  const { id } = useParams()

  const onAdd = (valor) => {
    if(valor > 0){
      addToCart(item, valor)
      setCarrito(false)
    }else{
      alert('Debes agregar al menos 1 producto')
    }
  }

  useEffect(() =>{ 
    const producto = doc(db, 'productos', id)
    getDoc(producto)
      .then(res => {setItem({id: res.id, ...res.data()})})
      .finally(()=> setCargando(false))
    }, [id])
    
  return (
    <>
    {cargando ? 
      <Spinner/> 
      : 
      item.nombre ? <ItemDetail item={item} carrito={carrito} onAdd={onAdd}/> : 'No existe el producto'}
    </>
  )
}
export default ItemDetailContainer