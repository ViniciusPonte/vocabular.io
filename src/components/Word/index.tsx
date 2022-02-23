import { useEffect, useState } from 'react'
import { useWords } from '../../contexts/word';
import styles from './styles.module.scss'

export function Word(){
    const {tries, setTries, activeTry, position, setPosition, submitTry} = useWords();
    const validLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    function handleKeyDown(e){
        console.log(e.key)
        if(validLetters.includes(e.key.toUpperCase())){
            let copy = [...tries];
            copy[activeTry][position].value = e.key.toLowerCase();
            setTries(copy);

            if(position === 4) return;
            setPosition(position + 1);

        } else if (e.key === 'Backspace'){
            let copy = [...tries];
            copy[activeTry][position].value = '';
            setTries(copy);

            if(position === 0) return;
            setPosition(position - 1);
        } else if (e.key === 'Enter') {
            submitTry()
        } else {
            return;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    });

    return (
        <div className={styles.wordContainer}>
            <div style={{display: 'flex'}}>
                {tries[0].map((item, index) => {
                    if(activeTry === 0){
                        return <div key={Math.random()} className={styles.letter} style={{borderColor: index === position && 'red'}} onClick={() => setPosition(index)}><span>{item.value}</span></div>
                    } else {
                        return <div key={Math.random()} className={styles.inactive}  style={{borderColor: item.status && item.status}}><span>{item.value}</span></div>
                    }
                })}
            </div>
            <div style={{display: 'flex'}}>
                {tries[1].map((item, index) => {
                    if(activeTry === 1){
                        return <div key={Math.random()} className={styles.letter} style={{borderColor: index === position && 'red'}} onClick={() => setPosition(index)}><span>{item.value}</span></div>
                    } else {
                        return <div key={Math.random()} className={styles.inactive}  style={{borderColor: item.status && item.status}}><span>{item.value}</span></div>
                    }
                })}
            </div>
            <div style={{display: 'flex'}}>
                {tries[2].map((item, index) => {
                    if(activeTry === 2){
                        return <div key={Math.random()} className={styles.letter} style={{borderColor: index === position && 'red'}} onClick={() => setPosition(index)}><span>{item.value}</span></div>
                    } else {
                        return <div key={Math.random()} className={styles.inactive}  style={{borderColor: item.status && item.status}}><span>{item.value}</span></div>
                    }
                })}
            </div>
            <div style={{display: 'flex'}}>
                {tries[3].map((item, index) => {
                    if(activeTry === 3){
                        return <div key={Math.random()} className={styles.letter} style={{borderColor: index === position && 'red'}} onClick={() => setPosition(index)}><span>{item.value}</span></div>
                    } else {
                        return <div key={Math.random()} className={styles.inactive}  style={{borderColor: item.status && item.status}}><span>{item.value}</span></div>
                    }
                })}
            </div>
            <div style={{display: 'flex'}}>
                {tries[4].map((item, index) => {
                    if(activeTry === 4){
                        return <div key={Math.random()} className={styles.letter} style={{borderColor: index === position && 'red'}} onClick={() => setPosition(index)}><span>{item.value}</span></div>
                    } else {
                        return <div key={Math.random()} className={styles.inactive}  style={{borderColor: item.status && item.status}}><span>{item.value}</span></div>
                    }
                })}
            </div>
            <div style={{display: 'flex'}}>
                {tries[5].map((item, index) => {
                    if(activeTry === 5){
                        return <div key={Math.random()} className={styles.letter} style={{borderColor: index === position && 'red'}} onClick={() => setPosition(index)}><span>{item.value}</span></div>
                    } else {
                        return <div key={Math.random()} className={styles.inactive}  style={{borderColor: item.status && item.status}}><span>{item.value}</span></div>
                    }
                })}
            </div>
        </div>
    )
}