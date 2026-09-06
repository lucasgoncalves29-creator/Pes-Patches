import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import PatchCover from './PatchCover.jsx';
import { baseGameLabel } from '../data/constants.js';

export default function Hero({ patch }) {
  if (!patch) return null;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Novo patch disponível</span>
          <h1 className={styles.title}>{patch.name}</h1>
          <p className={styles.desc}>{patch.description}</p>

          <dl className={styles.stats}>
            <div className={styles.stat}>
              <dt>PES base</dt>
              <dd>{baseGameLabel(patch.baseGame)}</dd>
            </div>
            <div className={styles.stat}>
              <dt>Temporada</dt>
              <dd>{patch.season}</dd>
            </div>
            <div className={styles.stat}>
              <dt>Versão</dt>
              <dd>{patch.version}</dd>
            </div>
            <div className={styles.stat}>
              <dt>Tamanho</dt>
              <dd>{patch.size}</dd>
            </div>
            <div className={styles.stat}>
              <dt>Atualizado em</dt>
              <dd>{patch.updateDate}</dd>
            </div>
          </dl>

          <Link to={`/patch/${patch.slug}`} className={styles.cta}>
            Ver patch
          </Link>
        </div>

        <div className={styles.coverWrap}>
          <PatchCover patch={patch} size="lg" />
        </div>
      </div>
    </section>
  );
}
