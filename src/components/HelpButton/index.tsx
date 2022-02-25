import styles from './styles.module.scss'
import { IoMdHelp } from 'react-icons/io';
import { useModal } from '../../contexts/modal';
import { Help } from '../../modals/Help';

export function HelpButton(){
    const {setIsVisible, setModalContent} = useModal();

    return (
        <IoMdHelp className={styles.helpbutton} size={40} onClick={() => {
            setIsVisible(true);
            setModalContent(<Help />)
        }}/>
    )
}