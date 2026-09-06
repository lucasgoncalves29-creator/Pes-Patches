import { Link } from 'react-router-dom';
import PatchGrid from '../components/PatchGrid.jsx';
import { useFavoritesContext } from '../hooks/FavoritesContext.jsx';
import { PATCHES } from '../data/patches.js';
import styles from './PatchListing.module.css';

export default function FavoritesPage() {
  const { favorites } = useFavoritesContext();
  const favoritePatches = PATCHES.filter((p) => favorites.includes(p.slug));

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.head}>
        <h1 className={styles.title}>Favoritos</h1>
        <p>Patches que você marcou com ★ para acessar rapidamente depois.</p>
      </header>

      {favoritePatches.length === 0 ? (
        <p>
          Você ainda não tem favoritos. <Link to="/patches">Explore o catálogo</Link> e toque na estrela de
          um patch para guardá-lo aqui.
        </p>
      ) : (
        <PatchGrid patches={favoritePatches} />
      )}
    </div>
  );
}
