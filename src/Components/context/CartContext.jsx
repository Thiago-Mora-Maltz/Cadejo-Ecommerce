import { useEffect, useState } from "react";
import { createContext } from "react"

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [] 
    const [cart, setCart] = useState(initialCart)
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
    
    const sumaPrecioCart = () => {
        return cart.reduce((total, item) => total+=(item.cantidad * parseInt(item.precio)), 0);
        }

    const sumaProductosCart = () => cart.reduce((total, item) => total += item.cantidad, 0)

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    return (
    <CartContext.Provider value={{cart, addToCart, isInCart, removeItem, clearCart, sumaPrecioCart, sumaProductosCart}}>
        {children}
    </CartContext.Provider>
  )
};

export default CartProvider