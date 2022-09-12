import React,  {useState } from 'react'
import { useEffect } from 'react'
import image from '../../assets/cadejoFoto.jpg'
import ItemDetail from './ItemDetail'
function ItemDetailContainer() {
  const [item, setItem] = useState([])

  useEffect(()=>{
    const objItem = 
    {nombre: 'Cadejo Vermú', descripcion: 'Inspirado del folclor barroco de la ciudad de la eterna primavera, Cadejo perro espectral aparece en los caminos nocturnos de aquellxs que beben para acompañarlos en su camino de vuelta.', precio: `$${500}`, imagen: image};

    const getItem = new Promise ((res)=>{
      setTimeout(()=>{
        res(objItem)
      }, 1000)
    })

    getItem.then(res => setItem(res));

  }, []);
  
  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer