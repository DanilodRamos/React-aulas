import {useState} from 'react'
import Button from './evento/Button'

function Condicional(){

    const [email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        console.log(email)
        console.log(userEmail)
    }
    function limparEmail(){
       setUserEmail('')
    }

    return(<div>
        <h2>Cadastre seu E-mail:</h2>
        <form>
            <input type="email" placeholder="Digite seu e-mail..." onChange={(e)=> setEmail(e.target.value)} />
            <button type="submit" onClick={enviarEmail}>
                Enviar-Email
            </button>
            {userEmail &&(//blobo de iff no react enquanto for verdadeiro exibi se nao //
                <div>
                    <p>O email do usuario é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpa e-mail</button>
                </div>
            )}
            </form>
       
    </div>)
}
export default Condicional