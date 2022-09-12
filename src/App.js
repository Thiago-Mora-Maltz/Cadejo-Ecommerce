import './App.css'
import ItemListContainer from './Components/ItemList/ItemListContainer'
import NavBar from './Components/common/NavBar.jsx'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

// {/* <ItemListContainer />
// <ItemDetailContainer />
// {/* STOCK DE 10 (A MODO DE PRUEBA) */}
// <ItemCount stock={10} initial={1} />
// <ItemCount stock={0} initial={0} />{' '}
// STOCK DE 0 (A MODO DE PRUEBA) */}
