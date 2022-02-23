import styles from './styles.module.scss';

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <span>V<span style={{color: 'yellow'}}>O</span>CA<span style={{color: 'red'}}>B</span>ULA<span style={{color: 'green'}}>R</span>.IO</span>
            </div>
        </header>
    );
}