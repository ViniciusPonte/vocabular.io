import styles from './styles.module.scss';

export function Help(){
    return (
        <div style={{maxWidth: 500}}>
            <span>Descubra a palavra correta em 6 tentativas. Depois de cada tentativa, as peças mostram o quão perto você está da solução.</span>
            <br/>
            <br/>
            <div style={{display: 'flex'}}>
                <span className={styles.letter}>A</span>
                <span className={styles.letter} style={{backgroundColor: 'var(--green)', borderColor: 'var(--green)'}}>U</span>
                <span className={styles.letter}>D</span>
                <span className={styles.letter}>I</span>
                <span className={styles.letter}>O</span>
            </div>
            <br />
            <span style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>A letra  <span className={styles.letter} style={{backgroundColor: 'var(--green)', borderColor: 'var(--green)', marginRight: '5px', marginLeft: '5px'}}>U</span>  faz parte da palavra e está na posição correta.</span>
            <br />
            <div style={{display: 'flex'}}>
                <span className={styles.letter}>T</span>
                <span className={styles.letter}>E</span>
                <span className={styles.letter}>R</span>
                <span className={styles.letter} style={{backgroundColor: 'var(--yellow)', borderColor: 'var(--yellow)'}}>M</span>
                <span className={styles.letter}>O</span>
            </div>
            <br/>
            <span style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>A letra  <span className={styles.letter} style={{backgroundColor: 'var(--yellow)', borderColor: 'var(--yellow)', marginRight: '5px', marginLeft: '5px' }}>M</span>  faz parte da palavra mas em outra posição.</span>
            <br />
            <div style={{display: 'flex'}}>
                <span className={styles.letter}>M</span>
                <span className={styles.letter}>E</span>
                <span className={styles.letter}>R</span>
                <span className={styles.letter}>M</span>
                <span className={styles.letter} style={{backgroundColor: 'var(--brown)', borderColor: 'var(--brown)'}}>O</span>
            </div>
            <br />
            <span style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>A letra  <span className={styles.letter} style={{backgroundColor: 'var(--brown)', borderColor: 'var(--brown)', marginRight: '5px', marginLeft: '5px' }}>O</span> não faz parte da palavra.</span>
            <br />
            <span>Os acentos são preenchidos automaticamente, e não são considerados nas dicas.</span>
            <br />
            <br />
            <span>As palavras podem possuir letras repetidas.</span>
            <br />
            <br />
            <span>Se você estiver logado, é possível acumular pontos e aparecer no ranking global! 🏆</span>
        </div>

    )
}