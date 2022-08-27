import React from 'react'
import image from '../assets/cadejoFoto.jpg'
function ItemListContainer(props) {
  const style = {
    fontStyle: 'italic',
    lineHeight: 1.6,  
  }
  return (
    <>
      <div className='container pt-4'>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-sm-3 col-landing'>
            <img src={image} alt='Cadejo Imagen' className="img-fluid landing-image"/>
          </div>
          <div className='col-lg-8 col-sm-5 col-landing' style={style}>
          {props.greeting}
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemListContainer