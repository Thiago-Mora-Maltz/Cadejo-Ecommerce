import React from 'react'
import { useLocation } from 'react-router-dom'
import imageVaso from '../../assets/imageHero.jpg'
import imageDescripcion from '../../assets/cadejoDescripcion.jpg'
import './hero.css'
function Hero() {
    const { pathname } = useLocation()

  return (
    <>
        {
        pathname === '/' ?
        <div className="jumbotron jumbotron-fluid">
          <img src={imageVaso} alt='' className='hero'/>
          <img src={imageDescripcion} alt='' className='hero'/>
        </div>
            :
        ''
        }
    </>
  )
}

export default Hero