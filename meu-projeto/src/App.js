import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

// sempre usar className //
  function App() {
    return ( 
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/">
         <Home />
       </Route>
      <Route path="/Empresa">
        <Empresa />
      </Route>
      <Route path="/Contato">
        <Contato />
      </Route>
    </Routes>
    <Footer />
   </Router>
  )
}
export default App
//roteamento router//
