import { useAuth } from '../../contexts/auth';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header(){
    const {user} = useAuth();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <span style={{fontSize: '2rem'}}>v<span style={{color: 'var(--yellow)'}}>o</span>ca<span style={{color: 'var(--brown)'}}>b</span>ula<span style={{color: 'var(--green)'}}>r</span>.io</span>
                
                {user ? `${user.email}` : <SignInButton />}
            </div>
        </header>
    );
}