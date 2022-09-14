import React from 'react'
import ItemCount from '../common/ItemCount'

function ItemDetail({item}) {
  return (
    <>
    <div className='row'>
      <div className='col-4 centrar'>
        <img src={item.imagen} alt={item.descripcion} style={{height: '450px', width: '100%'}}/>
      </div>
      <div className="col-8 centrar">
        <h2>{item.nombre}</h2>
        <h4>{item.descripcion}</h4>
        <h5>{item.precio}</h5>
        <ItemCount stock={item.stock} initial = {0}/>
      </div>
    </div>
    </>
  )
}

export default ItemDetail