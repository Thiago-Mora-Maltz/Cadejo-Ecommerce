import React from 'react'

function Spinner() {
  return (
    <>
      <div className="spinner-border text-success" role="status" style={{fontSize: '25px', height: '50px', width: '50px'}}>
        <span className="visually-hidden">Cargando...</span>
      </div>
    </>
  )
}

export default Spinner