import styles from '../styles/home.module.scss'
import { Word } from '../components/Word';
import { Keyboard } from '../components/Keyboard';

function Home() {
  return (
    <div className={styles.container}>
      <Word />
      <Keyboard />
    </div>
  )
}

export default Home;