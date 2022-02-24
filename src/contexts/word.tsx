import React, { createContext, useState, useContext } from "react";
import {words} from '../utils/words'

interface Letter {
    value: string,
    status: string,
}

interface WordContextProps {
    word: string,
    setWord: React.Dispatch<React.SetStateAction<string>>,
    activeTry: number,
    setActiveTry: React.Dispatch<React.SetStateAction<number>>,
    tries: Array<Array<Letter>>,
    setTries: React.Dispatch<React.SetStateAction<Array<Array<Letter>>>>,
    position: number,
    setPosition: React.Dispatch<React.SetStateAction<number>>,
    submitTry: () => void,
    nonExistentLetters: Array<string>
}

const WordsContext = createContext<WordContextProps>({} as WordContextProps);

export function WordsProvider({ children }) {
    const min = Math.ceil(0);
    const max = Math.floor(10);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const [word, setWord] = useState(words[randomNumber]);
    const [activeTry, setActiveTry] = useState(0);
    const [position, setPosition] = useState(0);
    const [nonExistentLetters, setNonExistentLetters] = useState([]);

    const [tries, setTries] = useState([
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
    ]);

    function submitTry(){
    
        const completeWord = tries[activeTry][0].value + tries[activeTry][1].value + tries[activeTry][2].value + tries[activeTry][3].value + tries[activeTry][4].value;
    
        if(completeWord.length !== 5) return; // ERRO SE A PALAVRA NÃO TIVER 5 LETRAS

        if(!words.includes(completeWord.toLowerCase())) return; // ERRO SE A PALAVRA NÃO EXISTIR NA BASE
    
        //VALIDAR PALAVRA
        for(let i = 0; i < word.length; i++){
          if(word[i] === completeWord[i]){
            let copy = [...tries];
            copy[activeTry][i].status = 'green';
            setTries(copy);
          } else if (word.includes(completeWord[i])){
            let copy = [...tries];
            copy[activeTry][i].status = 'yellow';
            setTries(copy);
          } else {
            let copy = [...tries];
            copy[activeTry][i].status = 'brown';
            setNonExistentLetters(old => [...old, completeWord[i].toUpperCase()])
            setTries(copy);
          }
        }
     
        const acertou = tries[activeTry][0].status === 'green' && tries[activeTry][1].status === 'green' && tries[activeTry][2].status === 'green' && tries[activeTry][3].status === 'green' && tries[activeTry][4].status === 'green';
    
        if(acertou){
          setActiveTry(6);
        } else {
          if(activeTry === 6){
            return;
          } else {
            setActiveTry(activeTry + 1);
            setPosition(0);
          }
        }
    }

    return (
        <WordsContext.Provider value={{word, setWord, activeTry, setActiveTry, tries, setTries, position, setPosition, submitTry, nonExistentLetters}}>
            {children}
        </WordsContext.Provider>
    );
}

export function useWords() {
  const context = useContext(WordsContext);
  const { word, setWord, activeTry, setActiveTry, tries, setTries, position, setPosition, submitTry, nonExistentLetters } = context;
  return { word, setWord, activeTry, setActiveTry, tries, setTries, position, setPosition, submitTry, nonExistentLetters };
}
