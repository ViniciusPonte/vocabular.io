import styles from './styles.module.scss'
import { useModal } from '../../contexts/modal';
import { SignUp } from '../../modals/SignUp';
import { SignIn } from '../../modals/SignIn';

export function SignInButton(){
    const { setIsVisible, setModalContent } = useModal();

    return (
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