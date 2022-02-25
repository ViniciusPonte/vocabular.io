import Image from 'next/image';
import { useAuth } from '../../contexts/auth';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header(){
    const {user, signOut} = useAuth();
    console.log(user);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <span style={{fontSize: '2rem'}}>v<span style={{color: 'var(--yellow)'}}>o</span>ca<span style={{color: 'var(--brown)'}}>b</span>ula<span style={{color: 'var(--green)'}}>r</span>.io</span>
                
                {user ? (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {user.photoURL && <Image src={user.photoURL} alt={user.email} height={60} width={60} className={styles.roundedfull}/>}
                        <div>
                            {user.displayName ? <span>{user.displayName}</span> : <span>{user.email}</span>}
                            <div />
                        </div>
                        <button onClick={() => signOut()}>sair</button>
                    </div>
                )  : <SignInButton />}
            </div>
        </header>
    );
}