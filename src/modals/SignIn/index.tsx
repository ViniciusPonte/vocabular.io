import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa'
import styles from './styles.module.scss';
import { useState } from 'react';
import { signIn } from "next-auth/react"
import { useAuth } from '../../contexts/auth';

export function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInWithGithub } = useAuth();

    return (
        <div className={styles.container}>
            <span>Entrar</span>

            <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <button onClick={() => signIn()}>Entrar</button>

            <div className={styles.socialButtons}>
                <button style={{backgroundColor: '#3A63BE'}}><FaFacebook size={20}/></button>
                <button style={{backgroundColor: '#C94130'}}><FaGoogle size={20}/></button>
                <button style={{backgroundColor: '#161B22'}} onClick={() => signInWithGithub()}><FaGithub size={20}/></button>
            </div>
        </div>
    )
}