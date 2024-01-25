function Saudacao ({nome}){
    function  gerarSaudacao(algumnome){
        return `olá, ${algumnome},tudo bem?`
    }
    return <>
     {nome && <p>{gerarSaudacao(nome)}</p>}
     </>
     //se há algum nomee imprimi saudacao//
}
export default Saudacao