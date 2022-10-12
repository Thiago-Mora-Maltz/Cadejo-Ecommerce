import React from 'react'
import { Link } from 'react-router-dom'
function Item({nombre, id, descripcion, image}) {
  return (
    <>
        <div className="card" style={{width: '18rem', height: '500px'}}>
            <img src={image} className="card-img-top" alt={descripcion} style={{ height: '50%'}}/> 
            <div className="card-body" style={{  backgroundColor : 'rgb(8, 8, 8)'}}>
                <h5 className="card-title" style={{width: '100%',textAlign: 'center'}}>{nombre}</h5>
                <Link to={`/detalle/${id}`} className="btn btn-outline-secondary">Ver más</Link>
            </div>
        </div>
    </>
  )
}

export default Item