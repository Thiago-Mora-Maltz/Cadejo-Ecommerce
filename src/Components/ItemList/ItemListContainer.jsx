import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import Spinner from '../common/Spinner'
import { getItems, arrayItems } from '../getItems'
import ItemList from './ItemList'

function ItemListContainer() {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)
  const {categoria} = useParams() 
  
  useEffect(() =>{
    getItems.then((res)=>{
      if(!categoria){
        setItems(res)
        setCargando(false)
      }else{
        const arrayFiltrado = arrayItems.filter(item => item.categoria === categoria)
        setItems(arrayFiltrado)
        setCargando(false)
      }
    })

  }, [categoria]);
  
  return (
    <>
      {cargando ? <Spinner/> : <ItemList items={items} />}
    </>
  )
}

export default ItemListContainer