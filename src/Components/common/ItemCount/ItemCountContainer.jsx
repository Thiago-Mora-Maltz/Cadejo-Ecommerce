import React, { useState } from 'react'
import Swal from 'sweetalert2'
import ItemCount from './ItemCount'

function ItemCountContainer({stock, initial, onAdd}) {
  let [valor, setValor] = useState(initial)
  const swalAlert = () => Swal.fire({
    title: 'Error!',
    text: 'No hay stock',
    icon: 'error',
    confirmButtonText: 'OK'
  })
  const suma = () => {
    if(valor < stock && valor >= 0){
        return setValor(valor+1 )
    }else{
        swalAlert()
    }
  }
  const resta = () => {
    if(valor <= stock && valor > 0){
        return setValor(valor-1)
    }else{
        swalAlert()
    }
  }
  const handleOnChange = (e) => {
    const nuevoValor = Number(e.target.value)
    nuevoValor <= 10 && nuevoValor >= 0 ? setValor(nuevoValor) : swalAlert()

  }

  return (
    <>
        <ItemCount resta={resta} onAdd={onAdd} handleOnChange={handleOnChange} suma={suma} valor={valor}/>
    </>
  )
}   

export default ItemCountContainer