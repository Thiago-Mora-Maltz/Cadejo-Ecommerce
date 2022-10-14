import React from 'react'
import Item from './Item'

function ItemList({items}) {
  return (
    <>
    <h1 className='py-5'>Nuestros Productos</h1>
    <div className='row centrar'>
      {items.map( item => (
        <div key={item.id} className='col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4 centrar'>
          <Item nombre={item.nombre} id={item.id} descripcion={item.descripcion} precio={item.precio} image={item.imagen}/>
        </div>
      )
      )}
    </div>
  </>
  )
}

export default ItemList