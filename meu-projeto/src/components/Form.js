function Form() {
    function cadastrarUsuario(e){
        e.preventDefault()//para o formulario html//
        console.log('Cadastrou o usuario!')
    }
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input text="text" placeholder="Digite seu nome:" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form