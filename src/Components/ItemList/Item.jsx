import React from 'react'
import { Link } from 'react-router-dom'
function Item({nombre, id, descripcion, image}) {
  return (
    <>
    <div className="card-menu mx-3 my-3">
        <img style={{width: '100%', height: '100%', borderRadius: '5%'}} src={image} alt=''/>
        <div className='card-body-menu'>
          <h3 style={{width: '100%', textAlign: 'center'}}>{nombre}</h3>
        <Link to={`/detalle/${id}`} style={{textDecoration: 'none'}}>
          <button className='button'>Ver más</button>
        </Link>
        </div>
    </div>
    </>
  )
}

export default Item