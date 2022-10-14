import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
function CartDetail({item}) {
  const {removeItem} = useContext(CartContext)
  const styleLi = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

  };
  return (
    <>
        <ul className='ul-detail pt-4 pb-4'>
            <li className="list-group-item centrar" style={styleLi}>
                <div className='mx-3'>
                    <img src={item.imagen} alt='aa' className='image-cart'/>
                </div>
                <div>
                    {item.nombre}
                </div>
            </li>
            <li className="list-group-item centrar">
                    <div className="badge bg-outline-opacity rounded-pill me-3">Cantidad: {item.cantidad}</div>
                    <div className="badge bg-outline-opacity rounded-pill me-3">${parseInt(item.cantidad) * parseInt(item.precio)}</div>
                    <FontAwesomeIcon className='pointer-click trash-icon p-3' icon={faTrashCan} onClick={()=> removeItem(item.id)} />
            </li>
        </ul>
        <hr style={{color: 'white'}}/>
    </> 
  )
}

export default CartDetail