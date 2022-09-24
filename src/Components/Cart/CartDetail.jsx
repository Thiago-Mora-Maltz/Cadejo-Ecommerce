import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function CartDetail({item}) {
  const {removeItem} = useContext(CartContext)
  return (
    <>
        <ul className='ul-detail'>
            <li className="list-group-item ">
                {item.nombre}
            </li>
            <li className="list-group-item">
                <div>
                    <span className="badge bg-outline-opacity rounded-pill me-3">Cantidad: {item.cantidad}</span>
                    <span className="badge bg-outline-opacity rounded-pill me-3">${parseInt(item.cantidad) * parseInt(item.precio)}</span>
                    <FontAwesomeIcon className='pointer-click' icon={faTrashCan} onClick={()=> removeItem(item.id)} />
                </div>
            </li>
        </ul>
    </>
  )
}

export default CartDetail