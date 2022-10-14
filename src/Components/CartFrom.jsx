import { serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext } from "react"
import {CartContext} from './context/CartContext'
function CartFrom() {
    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [celular, setCelular] = useState() 
    const [ordenId, setOrdenId] = useState("");
    const {cart, sumaPrecioCart, clearCart} = useContext(CartContext)

    const handleId = (id) => {
      setOrdenId(id);
    };

    const sendOrder = (e) => {
        e.preventDefault()
        if(cart.length > 0){
            const order = {
                comprador: {
                            nombre: nombre,
                            email: email,
                            celular: celular
                        },
                        items: cart,
                        total: sumaPrecioCart(),
                        fecha: serverTimestamp(),
            }
            const db = getFirestore();
            const ordersCollection =  collection(db, "orders");
            addDoc(ordersCollection, order).then((res) => {
                handleId(res.id);
                clearCart();
            });
        }
        else{
            alert('no hay productos en el carrito')
        }
    }

    return (
    <>
            <form className='form' onSubmit={(e)=>sendOrder(e)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Celular</label>
                        <input type="text" className="form-control" id="celular" onChange={(e) => setCelular(e.target.value)}/>
                    </div>
                    <button className="button">Generar orden</button>
            </form>
            {ordenId && <h1>Compra realizada exitosamente! Numero de orden: {ordenId}</h1>}
    </>
  )
}

export default CartFrom