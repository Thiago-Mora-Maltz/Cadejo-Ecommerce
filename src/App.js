import './App.css'
import ItemCount from './Components/ItemCount'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar.jsx'
function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer />
      {/* STOCK DE 10 (A MODO DE PRUEBA) */}
      <ItemCount stock={10} initial={1} />
      <ItemCount stock={0} initial={0} /> {/* STOCK DE 0 (A MODO DE PRUEBA)*/}
    </div>
  )
}

export default App
