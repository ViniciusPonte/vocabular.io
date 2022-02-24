import React, { createContext, useState, useContext } from "react";
import { useModal } from "./modal";
import firebase from 'firebase';

interface AuthContextProps {
    user: any,
    token: string,
    signIn: (email: string, password: string) => Promise<void>,
    signUp: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const {setIsVisible, setModalContent} = useModal();

    async function signIn(email: string, password: string){
        if(email === '') return;
        if(password === '') return;

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async response => {
            setUser(response.user);
            setToken(await response.user.getIdToken())
            setIsVisible(false);
            setModalContent(null);
        })
        .catch(err => console.log(err))
    }

    async function signUp(email: string, password: string){
        if(email === '') return;
        if(password === '') return;

        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async response => {
            setUser(response.user);
            setToken(await response.user.getIdToken())
            setIsVisible(false);
            setModalContent(null);
        })
        .catch(err => console.log(err))
    }

    return (
        <AuthContext.Provider value={{user, token, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const { user, token, signIn, signUp } = context;
  return { user, token, signIn, signUp };
}
