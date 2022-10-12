import { serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";

function CartFrom({cart, sumaPrecioCart, clearCart, handleId}) {
    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [celular, setCelular] = useState()
    
    const sendOrder = (e) => {
        e.preventDefault()
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
                    <button className="btn btn-outline-secondary">Generar orden</button>
            </form>
    </>
  )
}

export default CartFrom