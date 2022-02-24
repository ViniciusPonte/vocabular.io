import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import { useModal } from '../../contexts/modal';
import { Message } from '../Message';
import { SignUp } from '../../modals/SignUp';
import { SignIn } from '../../modals/SignIn';

export function SignInButton(){
    const { setIsVisible, setModalContent } = useModal();
    const isUserLoggedIn = false;
    
    return isUserLoggedIn ? (
        <button type="button" className={styles.signInButton}>
            Vinícius Ponte
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <div className={styles.divSignIn}>
            <button type="button" className={styles.signInButton}  onClick={() => {
                setIsVisible(true);
                setModalContent(<SignUp />)
            }}>
                Cadastre-se
            </button>
            <span onClick={() => {
                setIsVisible(true);
                setModalContent(<SignIn />)
            }}>já possuo uma conta</span>
        </div>
    )
}