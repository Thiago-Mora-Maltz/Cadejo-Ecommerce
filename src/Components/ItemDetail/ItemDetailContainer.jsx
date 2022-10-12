import { getDoc, doc } from 'firebase/firestore'
import React,  {useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebaseConfig'
import Spinner from '../common/Spinner'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [item, setItem] = useState([])
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()

  useEffect(()=>{ 
    const producto = doc(db, 'productos', id)
    getDoc(producto)
      .then(res => {setItem({id: res.id, ...res.data()})})
      .then(setCargando(false))
  }, [id]);
  
  return (
    <>
    {cargando ? 
      <Spinner/> 
      : 
      item.nombre ? <ItemDetail item={item}/> : 'No existe el producto'}
    </>
  )
}
export default ItemDetailContainer