import './App.css'
import Evento from './components/Evento'
import Form from './components/Form'
// sempre usar className //
  function App() {
  return ( 
    <div className="App"> 
    <h1>Testando Eventos</h1>
    <Evento numero="1" />
    <Form />
    </div>
  )
}
export default App
