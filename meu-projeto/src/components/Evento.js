import Button from './evento/Button'

function Evento() {
    function meuEvento(){
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento(){
        console.log('Ativando Segundo evento!')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
           
        </div>
    )
}
export default Evento