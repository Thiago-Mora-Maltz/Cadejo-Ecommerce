import './App.css'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import NavBar from './Components/common/navbar/NavBar.jsx'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgendarPedido from './Components/AgendarPedido/AgendarPedido'
import CartProvider from './Components/context/CartContext'
import UserProvider from './Components/context/UserContext'
import Cart from './Components/Cart/Cart'
import Hero from './Components/Hero/Hero'
import LogInForm from './Components/LogInForm/LogInForm'
import CartFrom from './Components/CartForm/CartFrom'

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <UserProvider>
          <BrowserRouter>
            <NavBar />
            <Hero />
            <div className='container pt-5 centrar'>
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route
                  path='/categoria/:categoria'
                  element={<ItemListContainer />}
                />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                <Route path='/agendarPedido' element={<AgendarPedido />} />
                <Route path='/menu' element={<ItemListContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/form' element={<CartFrom />} />
                <Route path='/login' element={<LogInForm />} />
                <Route path='/registrarse' element={<LogInForm />} />
                <Route path='*' element={<ItemListContainer />} />
              </Routes>
            </div>
          </BrowserRouter>
        </UserProvider>
      </CartProvider>
    </div>
  )
}

//Chequear stock antes de realizar compra.
//Arreglar tema loading / no hay stock disponible
//

export default App
