import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Danilo'
  const newName = name.toUpperCase()
  function sum(a,b){
    return a+b
  }
  const url ='https://via.placeholder.com/150'
  return (// sempre usar className //
    <div className="App"> 
    <h2>alterando jsx</h2>
    <p>Olá {newName}</p>
    <p>soma:{sum(1,2)}</p>
    <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
