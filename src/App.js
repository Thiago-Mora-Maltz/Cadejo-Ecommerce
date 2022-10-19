import './App.css'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import NavBar from './Components/common/navbar/NavBar.jsx'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './Components/context/CartContext'
import UserProvider from './Components/context/UserContext'
import Hero from './Components/Hero/Hero'
import LogInForm from './Components/LogInForm/LogInForm'
import CartFormContainer from './Components/CartForm/CartFormContainer'
import CartListContainer from './Components/Cart/CartListContainer'

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
                <Route path='/menu' element={<ItemListContainer />} />
                <Route path='/cart' element={<CartListContainer />} />
                <Route path='/cartForm' element={<CartFormContainer />} />
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

export default App
