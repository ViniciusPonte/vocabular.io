import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { WordsProvider } from '../contexts/word'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WordsProvider>
      <Header />
      <Component {...pageProps} />
    </WordsProvider>
  )
}

export default MyApp
