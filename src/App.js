import './App.css'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import NavBar from './Components/common/NavBar.jsx'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgendarPedido from './Components/AgendarPedido/AgendarPedido'
import CartProvider from './Components/context/CartContext'
import Cart from './Components/Cart/Cart'
import Hero from './Components/Hero'

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Hero/>
          <div className='container pt-5'>
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
              <Route path='*' element={<ItemListContainer />} /> 
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

//Chequear stock antes de realizar compra.
//Arreglar tema loading / no hay stock disponible
//

export default App
