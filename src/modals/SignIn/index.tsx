import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa'
import styles from './styles.module.scss';
import firebase from 'firebase';
import { useState } from 'react';
import { useModal } from '../../contexts/modal';
import { useAuth } from '../../contexts/auth';

export function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, user } = useAuth();

    console.log(signIn, user);

    return (
        <div className={styles.container}>
            <span>Entrar</span>

            <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <button onClick={() => signIn(email, password)}>Entrar</button>

            <div className={styles.socialButtons}>
                <button style={{backgroundColor: '#3A63BE'}}><FaFacebook size={20}/></button>
                <button style={{backgroundColor: '#C94130'}}><FaGoogle size={20}/></button>
                <button style={{backgroundColor: '#161B22'}}><FaGithub size={20}/></button>
            </div>
        </div>
    )
}