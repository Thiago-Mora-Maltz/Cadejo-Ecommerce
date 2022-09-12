import React from 'react'
import Item from './Item'

function ItemList({items}) {
  return (
    <>
    <div className='row'>
      {items.map( item => (
        <div key={item.id} className='col-4 mb-4'>
          <Item nombre={item.nombre} id={item.id} descripcion={item.descripcion} precio={item.precio} image={item.imagen}/>
        </div>
      )
      )}
    </div>
  </>
  )
}

export default ItemList