import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (item, cantidad) => {     //Agregar item
        if(isInCart(item.id)){
            setCart(cart.map(producto => {
               return producto.id === item.id ? {...producto, cantidad: parseInt(producto.cantidad + cantidad)} : producto 
            }))
        }else{
            setCart([...cart, {...item, cantidad: parseInt(cantidad)}])
        }
    } 
    
    const isInCart = (id) => cart.some(item => item.id === id)   //Search by ID
    
    const removeItem = (id) => {                     //Eliminar item por ID
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }
    
    const clearCart = () => setCart([])      //Vaciar Carrito

    return (
    <CartContext.Provider value={{cart, addToCart, isInCart, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
  )
};

export default CartProvider