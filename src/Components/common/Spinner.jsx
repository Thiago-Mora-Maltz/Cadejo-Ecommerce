import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
function Spinner() {
  return (
    <>
        <div className='centrar'>
            <h3><FontAwesomeIcon icon={faSpinner} style={{marginRight: '10px'}}/></h3>
            <h3>Cargando...</h3>
        </div>
    </>
  )
}

export default Spinner