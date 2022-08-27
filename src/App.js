import './App.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar.jsx'
function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting='Inspirado del folclor barroco de la ciudad de la eterna primavera, Cadejo perro espectral aparece en los caminos nocturnos de aquellxs que beben para acompañarlos en su camino de vuelta.' />
    </div>
  )
}

export default App
