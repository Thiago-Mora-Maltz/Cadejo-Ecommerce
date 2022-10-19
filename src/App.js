import './App.css'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './Components/context/CartContext'
import UserProvider from './Components/context/UserContext'
import Hero from './Components/Hero/Hero'
import CartFormContainer from './Components/CartForm/CartFormContainer'
import CartListContainer from './Components/Cart/CartListContainer'
import FormContainer from './Components/LogInForm/FormContainer'
import NavBarContainer from './Components/common/navbar/NavBarContainer'

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <UserProvider>
          <BrowserRouter>
            <NavBarContainer />
            <Hero />
            <div className='container pt-5 centrar'>
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route
                  path='/categoria/:categoria'
                  element={<ItemListContainer />}
                />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                <Route path='/menu' element={<ItemListContainer />} />
                <Route path='/cart' element={<CartListContainer />} />
                <Route path='/cartForm' element={<CartFormContainer />} />
                <Route path='/login' element={<FormContainer />} />
                <Route path='/registrarse' element={<FormContainer />} />
                <Route path='*' element={<ItemListContainer />} />
              </Routes>
            </div>
          </BrowserRouter>
        </UserProvider>
      </CartProvider>
    </div>
  )
}

export default App
