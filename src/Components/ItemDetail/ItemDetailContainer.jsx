import React,  {useState } from 'react'
import { useEffect } from 'react'
import { arrayItems } from '../getItems'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from '../common/Spinner'

function ItemDetailContainer() {
  const [item, setItem] = useState([])
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()

  useEffect(()=>{ 
    let objItem = {}

    const getItem = new Promise ((res)=>{
      setTimeout(() =>{
        objItem = arrayItems.find(item => item.id === parseInt(id))
        res(objItem)
        setCargando(false)
      }, 1000)
    })

    getItem.then(res => setItem(res));
  }, [id]);
  
  return (
    <>
    {cargando ? <Spinner/> : <ItemDetail item={item} />}
    </>
  )
}

export default ItemDetailContainer