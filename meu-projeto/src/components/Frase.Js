import styles from './Frase.module.css'
function Frase() {
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Esse e um componente frase!!!</p>
        </div>
    )

}
export default Frase