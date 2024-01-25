import './App.css'
import OutraLista from './components/OutraLista'

// sempre usar className //
  function App() {

    const meuItens =['React','Vue', 'Angular']

  return ( 
    <div className="App"> 
    <h1>Renderização de listas</h1>
    <OutraLista itens={meuItens} />
     </div>
  )
}
export default App
