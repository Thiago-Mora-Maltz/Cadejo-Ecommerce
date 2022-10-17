import { serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext } from "react"
import {CartContext} from '../context/CartContext'
import CartForm from './CartForm';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

function CartFromContainer() {
    const [ordenId, setOrdenId] = useState("");
    const {cart, sumaPrecioCart, clearCart} = useContext(CartContext)
    const { reset } = useForm()
    const handleId = (id) => {
      setOrdenId(id);
    };

    const sendOrder = (obj) => {
        if(cart.length > 0){
            const order = {
                comprador: {
                            nombre: obj.nombre,
                            email: obj.email,
                            celular: obj.celular
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
                reset()
            });
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'No hay productos en el carrito',
                icon: 'error',
                confirmButtonText: 'OK',
              })
        }
    }

    return (
    <>
    <CartForm sendOrder={sendOrder} ordenId={ordenId}/>
    </>
  )
}

export default CartFromContainer