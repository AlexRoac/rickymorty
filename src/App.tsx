import { Card } from './components'
import './App.css'
import { useCharacter } from './hooks'
function App() {
  const {characters} = useCharacter()
  return (
  <>
  <div className="card-container">
    {
      characters.map((p)=>(
        <Card
        key={p.id}
        estado={p.estado}
        imagen={p.imagen} 
        nombre={p.nombre} 
        tipo={p.tipo} 
         />
      ))
    }
  </div>
  </>
  )
}

export default App
