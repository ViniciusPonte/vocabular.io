import React, { createContext, useState, useContext } from "react";
import {words} from '../utils/words'


interface WordContextProps {
    word: string,
    setWord: React.Dispatch<React.SetStateAction<string>>,
    activeTry: number,
    setActiveTry: React.Dispatch<React.SetStateAction<number>>,
    tries: Array<Array<string>>,
    setTries: React.Dispatch<React.SetStateAction<Array<Array<string>>>>,
    position: number,
    setPosition: React.Dispatch<React.SetStateAction<number>>,
}

const WordsContext = createContext<WordContextProps>({} as WordContextProps);

export function WordsProvider({ children }) {
    const min = Math.ceil(0);
    const max = Math.floor(10);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    const [word, setWord] = useState(words[randomNumber]);
    const [activeTry, setActiveTry] = useState(0);
    const [position, setPosition] = useState(0);

    const [tries, setTries] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
    ]);

    return (
        <WordsContext.Provider value={{word, setWord, activeTry, setActiveTry, tries, setTries, position, setPosition}}>
            {children}
        </WordsContext.Provider>
    );
}

export function useWords() {
  const context = useContext(WordsContext);
  const { word, setWord, activeTry, setActiveTry, tries, setTries, position, setPosition } = context;
  return { word, setWord, activeTry, setActiveTry, tries, setTries, position, setPosition };
}
