import { useAuth } from '../../contexts/auth';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header(){
    const {user} = useAuth();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <span style={{fontSize: '2rem'}}>v<span style={{color: 'yellow'}}>o</span>ca<span style={{color: 'red'}}>b</span>ula<span style={{color: 'green'}}>r</span>.io</span>
                
                {user ? `${user.email}` : <SignInButton />}
            </div>
        </header>
    );
}