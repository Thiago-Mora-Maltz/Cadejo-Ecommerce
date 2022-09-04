import React, { useState } from 'react'
import { useEffect } from 'react'
import uuid from 'react-uuid'
import image from '../assets/cadejoFoto.jpg'
import ItemList from './ItemList'
function ItemListContainer() {
  const [items, setItems] = useState([])
  
  useEffect(() =>{
    const arrayItems = [
      {id: uuid(), nombre: 'Cadejo Vermú', descripcion: 'Inspirado del folclor barroco de la ciudad de la eterna primavera, Cadejo perro espectral aparece en los caminos nocturnos de aquellxs que beben para acompañarlos en su camino de vuelta.', precio: `${500}$`, imagen: image},
      {id: uuid(), nombre: 'Cadejo Vermú', descripcion: 'Inspirado del folclor barroco de la ciudad de la eterna primavera, Cadejo perro espectral aparece en los caminos nocturnos de aquellxs que beben para acompañarlos en su camino de vuelta.', precio: `${500}$`, imagen: image},
      {id: uuid(), nombre: 'Cadejo Vermú', descripcion: 'Inspirado del folclor barroco de la ciudad de la eterna primavera, Cadejo perro espectral aparece en los caminos nocturnos de aquellxs que beben para acompañarlos en su camino de vuelta.', precio: `${500}$`, imagen: image},
      {id: uuid(), nombre: 'Cadejo Vermú', descripcion: 'Inspirado del folclor barroco de la ciudad de la eterna primavera, Cadejo perro espectral aparece en los caminos nocturnos de aquellxs que beben para acompañarlos en su camino de vuelta.', precio: `${500}$`, imagen: image},
      {id: uuid(), nombre: 'Cadejo Vermú', descripcion: 'Inspirado del folclor barroco de la ciudad de la eterna primavera, Cadejo perro espectral aparece en los caminos nocturnos de aquellxs que beben para acompañarlos en su camino de vuelta.', precio: `${500}$`, imagen: image},
      {id: uuid(), nombre: 'Cadejo Vermú', descripcion: 'Inspirado del folclor barroco de la ciudad de la eterna primavera, Cadejo perro espectral aparece en los caminos nocturnos de aquellxs que beben para acompañarlos en su camino de vuelta.', precio: `${500}$`, imagen: image}
    ]
    const getItems = new Promise((res)=>{
      setTimeout(()=>{
        res(arrayItems)
      }, 2000);
    });

    getItems.then((res)=>{
      setItems(res)
    })
  }, []);


  return (
    <>
      <div className='container pt-4'>
        <ItemList items={items}/>
      </div>
    </>
  )
}

export default ItemListContainer