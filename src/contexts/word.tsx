import React, { createContext, useState, useContext } from "react";
import {words} from '../utils/words'
import firebase from 'firebase';
import { useAuth } from "./auth";

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
    nonExistentLetters: Array<string>,
    att: boolean
}

const WordsContext = createContext<WordContextProps>({} as WordContextProps);

export function WordsProvider({ children }) {
    const min = Math.ceil(0);
    const max = Math.floor(999);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const [word, setWord] = useState(words[randomNumber]);
    const [activeTry, setActiveTry] = useState(0);
    const [position, setPosition] = useState(0);
    const [nonExistentLetters, setNonExistentLetters] = useState([]);
    const {user} = useAuth();
    const [att, setAtt] = useState(false);

    const [tries, setTries] = useState([
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
    ]);

    function resetGame(){
      setWord(words[randomNumber]);
      setActiveTry(0);
      setPosition(0);
      setTries([
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
        [{value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}, {value: '', status: ''}],
      ]);
      setNonExistentLetters([]);
    }

    function submitTry(){
    
        const completeWord = tries[activeTry][0].value + tries[activeTry][1].value + tries[activeTry][2].value + tries[activeTry][3].value + tries[activeTry][4].value;
    
        if(completeWord.length !== 5) return; // ERRO SE A PALAVRA NÃO TIVER 5 LETRAS

        /* if(!words.includes(completeWord.toLowerCase())) return; */ // ERRO SE A PALAVRA NÃO EXISTIR NA BASE
    
        //VALIDAR PALAVRA
        for(let i = 0; i < word.length; i++){
          if(word[i] === completeWord[i]){
            let copy = [...tries];
            copy[activeTry][i].status = 'var(--green)';
            setTries(copy);
          } else if (word.includes(completeWord[i])){
            let copy = [...tries];
            copy[activeTry][i].status = 'var(--yellow)';
            setTries(copy);
          } else {
            let copy = [...tries];
            copy[activeTry][i].status = 'var(--brown)';
            setNonExistentLetters(old => [...old, completeWord[i].toUpperCase()])
            setTries(copy);
          }
        }
     
        const acertou = tries[activeTry][0].status === 'var(--green)' && tries[activeTry][1].status === 'var(--green)' && tries[activeTry][2].status === 'var(--green)' && tries[activeTry][3].status === 'var(--green)' && tries[activeTry][4].status === 'var(--green)';
    
        if(acertou){
          if(user){
            let points = 0;

            switch(activeTry){
              case 0:
                points = 60;
                break;
              case 1:
                points = 50;
                break;
              case 2:
                points = 40;
                break;
              case 3:
                points = 30;
                break;
              case 4:
                points = 20;
                break;
              case 5:
                points = 10;
                break;
            }

            firebase.firestore().collection('points')
            .doc(user.uid).get()
            .then(client => {
              if(!client.exists){
                  firebase.firestore().collection('points').doc(user.uid).set({
                    name: user.displayName ? user.displayName : user.email,
                    points
                  }).then(() => {
                    setAtt(true);
                    setAtt(false);
                  })
              } else {
                const data = client.data();
                points = data.points + points;
                firebase.firestore().collection('points').doc(user.uid).set({
                  name: user.displayName ? user.displayName : user.email,
                  points
                }).then(() => {
                  setAtt(true);
                  setAtt(false);
                })
              } 
            })
            .catch(err => {
                console.log(err);
            });
          }

          resetGame();
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
        <WordsContext.Provider value={{word, setWord, activeTry, setActiveTry, tries, setTries, position, setPosition, submitTry, nonExistentLetters, att}}>
            {children}
        </WordsContext.Provider>
    );
}

export function useWords() {
  const context = useContext(WordsContext);
  const { word, setWord, activeTry, setActiveTry, tries, setTries, position, setPosition, submitTry, nonExistentLetters, att } = context;
  return { word, setWord, activeTry, setActiveTry, tries, setTries, position, setPosition, submitTry, nonExistentLetters, att };
}
