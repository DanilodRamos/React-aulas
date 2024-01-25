function OutraLista ( itens ){
    return(
        <>
        <h3>Lista de coisas boas:</h3>
        {itens.lenght > 0 ?(
            itens.map((item,index) => (
                <p Key={index}>{item}</p>
        ))) : ( //: quer dizer se nao tiver aparece o P//
            <p>Não ha itens na lista!</p>
        )}
        </>
    )
}
export default OutraLista