import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

  function App(){
 
  const nome ="Maria"
  
  return (// sempre usar className //
    <div className="App"> 
    <h1>Testanto css</h1>
    <Frase />
    <Frase />
    <SayMyName nome="Danilo" />
    <SayMyName nome="João" />
    <SayMyName nome= {nome} />
    <Pessoa nome= "Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  )
}

export default App
