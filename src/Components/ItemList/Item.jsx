import React from 'react'
import { NavLink } from 'react-router-dom'
function Item({nombre, id, descripcion, precio, image}) {
  return (
    <>
        <div className="card" style={{width: '18rem', height: '720px'}}>
            <img src={image} className="card-img-top" alt="cadejo"/> 
            <div className="card-body" style={{  backgroundColor : 'rgb(8, 8, 8)'}}>
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{id}</p>
                <p>{descripcion}</p>
                <p>{precio}</p>
                <NavLink to={`/detalle/${id}`} className="btn btn-outline-secondary">Ir al producto</NavLink>
            </div>
        </div>
    </>
  )
}

export default Item