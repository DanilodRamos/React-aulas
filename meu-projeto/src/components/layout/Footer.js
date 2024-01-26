import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer (){
    return <footer>
        <ul>
            <li> <FaFacebook /></li>
            <li> <FaInstagram /></li>
            <li> <FaLinkedin /></li>
        </ul>
        <p>Nosso rodape</p>
       
    </footer>
}
export default Footer