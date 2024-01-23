import { UseState, useState }from 'react'

function Form() {
    function cadastrarUsuario(e){
        e.preventDefault()//para o formulario html//
        // eslint-disable-next-line no-template-curly-in-string
        console.log(`Usuario ${name} foi cadastrado com as  senha: ${password}`)
        console.log('Cadastrou o usuario!')
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()


    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input text="text"
                     id="name"
                     name="name"
                    placeholder="Digite seu nome:"
                    onChange={(e) => setName(e.target.value)}//setname atriu o valor e o name  reseta valor//
                     />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input text="password" id="password" name="password"
                    placeholder="Digite a sua senha:"
                    onChange={(e) => setPassword(e.target.value)}
                     />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form