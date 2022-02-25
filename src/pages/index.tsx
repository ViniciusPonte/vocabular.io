import styles from '../styles/home.module.scss'
import { Word } from '../components/Word';
import { Keyboard } from '../components/Keyboard';
import { Modal } from '../components/Modal';
import { HelpButton } from '../components/HelpButton';
import { RankingButton } from '../components/RankingButton';

function Home() {
  return (
    <div className={styles.container}>
      <Word />
      <Keyboard />
      <Modal />
      <HelpButton />
      <RankingButton />
    </div>
  )
}

export default Home;