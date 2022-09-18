import './App.css'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import NavBar from './Components/common/NavBar.jsx'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgendarPedido from './Components/AgendarPedido/AgendarPedido'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
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
            <Route path='/cart' element={<AgendarPedido />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
