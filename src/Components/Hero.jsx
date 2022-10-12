import React from 'react'
import { useLocation } from 'react-router-dom'
import foto from '../assets/cadejoFoto.jpg'
function Hero() {
    const { pathname } = useLocation()

  return (
    <>
        {
        pathname == '/' ?
        <div className="jumbotron jumbotron-fluid"></div>
            :
        ''
        }
    </>
  )
}

export default Hero