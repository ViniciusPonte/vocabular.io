import styles from '../styles/home.module.scss'
import { Word } from '../components/Word';
import ReactModal from 'react-modal';
import { Keyboard } from '../components/Keyboard';
import { Modal } from '../components/Modal';

function Home() {
  return (
    <div className={styles.container}>
      <Word />
      <Keyboard />
      <Modal />
    </div>
  )
}

export default Home;