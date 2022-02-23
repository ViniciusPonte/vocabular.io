import styles from '../styles/home.module.scss'
import { useWords } from "../contexts/word";
import { Word } from '../components/Word';

function Home() {
  const {setActiveTry, activeTry, setPosition} = useWords();

  function submitTry(){
    if(activeTry === 6){
      return;
    } else {
      setActiveTry(activeTry + 1);
      setPosition(0);
    }
  }

  return (
    <div className={styles.container}>
      <Word />
      <button onClick={() => submitTry()}>Enviar</button>
    </div>
  )
}

export default Home;