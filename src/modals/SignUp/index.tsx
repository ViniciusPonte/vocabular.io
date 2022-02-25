import { FaGithub, FaFacebook, FaGoogle } from 'react-icons/fa'
import styles from './styles.module.scss';
import { useState } from 'react';
import { useAuth } from '../../contexts/auth';

export function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signUp } = useAuth();

    return (
        <div className={styles.container}>
            <span>Cadastrar</span>

            <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <input placeholder="Confirme sua senha" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>

            <button onClick={() => signUp(email, password, confirmPassword)}>Criar conta</button>

            <div className={styles.socialButtons}>
                <button style={{backgroundColor: '#3A63BE'}}><FaFacebook size={20}/></button>
                <button style={{backgroundColor: '#C94130'}}><FaGoogle size={20}/></button>
                <button style={{backgroundColor: '#161B22'}}><FaGithub size={20}/></button>
            </div>
        </div>
    )
}