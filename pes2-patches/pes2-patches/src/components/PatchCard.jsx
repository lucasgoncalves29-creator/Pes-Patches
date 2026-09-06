import { Link } from 'react-router-dom';
import styles from './PatchCard.module.css';
import PatchCover from './PatchCover.jsx';
import { baseGameLabel } from '../data/constants.js';
import { useFavoritesContext } from '../hooks/FavoritesContext.jsx';

export default function PatchCard({ patch }) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const fav = isFavorite(patch.slug);

  return (
    <article className={styles.card}>
      <Link to={`/patch/${patch.slug}`} className={styles.coverLink}>
        <PatchCover patch={patch} />
      </Link>

      <button
        type="button"
        className={`${styles.favBtn} ${fav ? styles.favActive : ''}`}
        onClick={() => toggleFavorite(patch.slug)}
        aria-pressed={fav}
        aria-label={fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        ★
      </button>

      <div className={styles.body}>
        <h3 className={styles.name}>
          <Link to={`/patch/${patch.slug}`}>{patch.name}</Link>
        </h3>

        <div className={styles.metaRow}>
          <span>{baseGameLabel(patch.baseGame)}</span>
          <span className={styles.dot} aria-hidden="true">
            •
          </span>
          <span>{patch.season}</span>
        </div>

        <p className={styles.desc}>{patch.description}</p>

        <div className={styles.specs}>
          <span className="mono">{patch.version}</span>
          <span className="mono">{patch.region}</span>
          <span className="mono">{patch.size}</span>
        </div>

        <div className={styles.footer}>
          <span className={styles.updated}>Atualizado {patch.updateDate}</span>
          <Link to={`/patch/${patch.slug}`} className={styles.detailsBtn}>
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
