import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import Spinner from '../common/Spinner'
import ItemList from './ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebaseConfig.js'
function ItemListContainer() {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)
  const {categoria} = useParams() 
  
  useEffect(() => {
    const itemCollection = collection(db, 'productos');
    const queryItems = categoria ? query(itemCollection, where('categoria', '==', categoria)) : itemCollection
    getDocs(queryItems)
      .then(res => setItems(res.docs.map(item => ({id: item.id, ...item.data()}))))
      .then(setCargando(false))
    }, [categoria]);
  return (
      <>
        {cargando ? <Spinner/> : <ItemList items={items} />}
      </>
  )
}

export default ItemListContainer