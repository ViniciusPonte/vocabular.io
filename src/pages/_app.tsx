import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SnackbarProvider } from "notistack";
import { WordsProvider } from '../contexts/word'
import firebase from 'firebase';
import '../styles/global.scss'
import {firebaseConfig} from '../config/firebase';
import { ModalProvider } from '../contexts/modal';
import { AuthProvider } from '../contexts/auth';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); 
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={1} className="snackbar">
      <ModalProvider>
        <AuthProvider>
            <WordsProvider>
              <Header />
              <Component {...pageProps} />
            </WordsProvider>
        </AuthProvider> 
      </ModalProvider>
    </SnackbarProvider>
  )
}

export default MyApp
