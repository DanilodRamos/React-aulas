import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar (){
    return(
    <ul className={styles.list}>
        <li className={styles.item}>
          <link to="/">Home</link>
        </li>
        <li className={styles.item}>
          <link to="/empresa">Empresa</link>
        </li>
        <li className={styles.item}>
          <link to="/contato">Contato</link>
        </li>
    </ul>)
}
export default NavBar
