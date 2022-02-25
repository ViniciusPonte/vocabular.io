import styles from './styles.module.scss'
import { AiFillTrophy } from 'react-icons/ai';
import { useModal } from '../../contexts/modal';
import { Ranking } from '../../modals/Ranking';

export function RankingButton(){
    const {setIsVisible, setModalContent} = useModal();

    return (
        <AiFillTrophy className={styles.rankingbutton} size={40} onClick={() => {
            setIsVisible(true);
            setModalContent(<Ranking />)
        }}/>
    )
}