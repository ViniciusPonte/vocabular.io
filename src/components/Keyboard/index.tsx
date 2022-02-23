import styles from './styles.module.scss'
import {MdBackspace} from 'react-icons/md'
import { useWords } from '../../contexts/word';
import { words } from '../../utils/words';

export function Keyboard(){
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Backspace'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter']
    ]

    const {tries, activeTry, position, setPosition, setTries, submitTry, nonExistentLetters} = useWords();
    const validLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    function handleKeyDown(key){
        if(validLetters.includes(key.toUpperCase())){
            let copy = [...tries];
            copy[activeTry][position].value = key.toLowerCase();
            setTries(copy);

            if(position === 4) return;
            setPosition(position + 1);

        } else if (key === 'Backspace'){
            let copy = [...tries];
            copy[activeTry][position].value = '';
            setTries(copy);

            if(position === 0) return;
            setPosition(position - 1);
        } else if (key === 'Enter') {
            submitTry();
        } else {
            return;
        }
    }

    return (
        <div className={styles.keyboard}>
            <div style={{paddingRight: '60px'}} className={styles.line}>
                {keys[0].map(item => {
                    if(nonExistentLetters.includes(item)){
                        return <span onClick={() => handleKeyDown(item)} className={styles.disabledKey} key={Math.random()}>{item}</span>
                    } else {
                        return <span onClick={() => handleKeyDown(item)} className={styles.key} key={Math.random()}>{item}</span>
                    }
                })}
            </div>


            <div className={styles.line}>
                {keys[1].map(item => {
                    if(nonExistentLetters.includes(item)){
                        return <span onClick={() => handleKeyDown(item)} className={styles.disabledKey} key={Math.random()}>{item === 'Backspace' ? <MdBackspace  /> : item}</span>
                    } else {
                        return <span onClick={() => handleKeyDown(item)} className={styles.key} key={Math.random()}>{item === 'Backspace' ? <MdBackspace  /> : item}</span>
                    }
                })}
            </div>


            <div style={{paddingLeft: '60px'}}  className={styles.line}>
                {keys[2].map(item => {
                    if(nonExistentLetters.includes(item)){
                        return <span onClick={() => handleKeyDown(item)} className={styles.disabledKey} key={Math.random()}>{item}</span>  
                    } else {
                        return <span onClick={() => handleKeyDown(item)} className={styles.key} key={Math.random()}>{item}</span>
                    }
                })}
            </div>
        </div>
        
    )
}