import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/auth';
import { useWords } from '../../contexts/word';
import { ExperienceBar } from '../ExperienceBar';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import firebase from 'firebase'

export function Header(){
    const {user, signOut} = useAuth();
    const {att} = useWords();
    const [points, setPoints] = useState(0)
    
    useEffect(() => {
        if(user){
            firebase.firestore().collection('points').doc(user.uid).get()
            .then(client => {
                if(!client.exists){
                    return;
                } else {
                    const data = client.data();
                    setPoints(data.points);
                } 
            })
            .catch(err => {
                console.log(err);
            });
        }
    }, [att, user])

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <span style={{fontSize: '2rem'}}>v<span style={{color: 'var(--yellow)'}}>o</span>ca<span style={{color: 'var(--brown)'}}>b</span>ula<span style={{color: 'var(--green)'}}>r</span>.io</span>
                
                {user ? (
                    <div style={{display: 'flex', alignItems: 'center', width: '30%'}}>
                        {user.photoURL && <Image src={user.photoURL} alt={user.email} height={40} width={40} className={styles.roundedfull}/>}
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', width: '100%'}}>
                            {user.displayName ? <span>{user.displayName}</span> : <span>{user.email}</span>}
                            {/* <ExperienceBar /> */}
                            <span>{points} pontos</span>
                        </div>{/* 
                        <button onClick={() => signOut()}>sair</button> */}
                    </div>
                )  : <SignInButton />}
            </div>
        </header>
    );
}