import styles from './styles.module.scss'

export function ExperienceBar(){
    return (
        <div className={styles.bar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '60%'}}/>
            </div>
            <span>600 xp</span>
        </div>
    )
}