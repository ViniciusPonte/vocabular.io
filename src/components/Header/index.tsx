import styles from './styles.module.scss';

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h3>TERM.OOO</h3>
            </div>
        </header>
    );
}