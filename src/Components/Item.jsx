import React from 'react'

function Item({nombre, id, descripcion, precio, image}) {
  return (
    <>
        <div className="card" style={{width: '18rem', height: '720px'}}>
            <img src={image} className="card-img-top" alt="cadejo"/> 
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{id}</p>
                <p>{descripcion}</p>
                <p>{precio}</p>
                <a href="#" className="btn btn-primary">Ir al producto</a>
            </div>
        </div>
    </>
  )
}

export default Item