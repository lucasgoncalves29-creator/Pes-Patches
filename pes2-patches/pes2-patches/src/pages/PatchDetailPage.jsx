import { Link, useParams } from 'react-router-dom';
import { getPatchBySlug } from '../data/patches.js';
import { baseGameLabel } from '../data/constants.js';
import PatchCover from '../components/PatchCover.jsx';
import FileLinks from '../components/FileLinks.jsx';
import { useFavoritesContext } from '../hooks/FavoritesContext.jsx';
import styles from './PatchDetailPage.module.css';

const SPEC_FIELDS = [
  ['PES base', (p) => baseGameLabel(p.baseGame)],
  ['Versão', (p) => p.version],
  ['Temporada', (p) => p.season],
  ['Desenvolvedor/editor', (p) => p.developer],
  ['Região', (p) => p.region],
  ['Tamanho', (p) => p.size],
  ['Data de lançamento', (p) => p.releaseDate],
  ['Última atualização', (p) => p.updateDate]
];

export default function PatchDetailPage() {
  const { slug } = useParams();
  const patch = getPatchBySlug(slug);
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  if (!patch) {
    return (
      <div className={`container ${styles.notFound}`}>
        <h1>Patch não encontrado</h1>
        <p>O patch que você procura não está mais disponível no catálogo.</p>
        <Link to="/patches" className={styles.backLink}>
          ← Voltar para todos os patches
        </Link>
      </div>
    );
  }

  const fav = isFavorite(patch.slug);

  return (
    <div className={`container ${styles.page}`}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link to="/">Início</Link> / <Link to="/patches">Patches</Link> / <span>{patch.name}</span>
      </nav>

      <div className={styles.hero}>
        <div className={styles.coverCol}>
          <PatchCover patch={patch} size="lg" />
          <button
            type="button"
            className={`${styles.favBtn} ${fav ? styles.favActive : ''}`}
            onClick={() => toggleFavorite(patch.slug)}
            aria-pressed={fav}
          >
            <span aria-hidden="true">★</span> {fav ? 'Favoritado' : 'Adicionar aos favoritos'}
          </button>
        </div>

        <div className={styles.infoCol}>
          <h1 className={styles.name}>{patch.name}</h1>
          <div className={styles.categoryTags}>
            {patch.categories.map((c) => (
              <span key={c} className={styles.categoryTag}>
                {c}
              </span>
            ))}
          </div>

          <p className={styles.description}>{patch.description}</p>

          <dl className={styles.specGrid}>
            {SPEC_FIELDS.map(([label, getValue]) => (
              <div key={label} className={styles.specItem}>
                <dt>{label}</dt>
                <dd className="mono">{getValue(patch)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className={styles.detailGrid}>
        <section className={styles.block}>
          <h2>Novidades desta versão</h2>
          <p>{patch.whatsNew}</p>
        </section>

        <section className={styles.block}>
          <h2>Compatibilidade</h2>
          <p>{patch.compatibility}</p>
        </section>

        <section className={styles.block}>
          <h2>Instruções de instalação</h2>
          <p>{patch.instructions}</p>
        </section>

        <section className={styles.block}>
          <h2>Conteúdo do patch</h2>
          <ul className={styles.contentList}>
            {patch.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {patch.screenshots && patch.screenshots.length > 0 && (
        <section className={styles.block}>
          <h2>Screenshots</h2>
          <div className={styles.mediaGrid}>
            {patch.screenshots.map((src, idx) => (
              <img key={idx} src={src} alt={`Screenshot ${idx + 1} de ${patch.name}`} loading="lazy" />
            ))}
          </div>
        </section>
      )}

      {patch.videos && patch.videos.length > 0 && (
        <section className={styles.block}>
          <h2>Vídeos</h2>
          <div className={styles.mediaGrid}>
            {patch.videos.map((src, idx) => (
              <iframe
                key={idx}
                src={src}
                title={`Vídeo ${idx + 1} de ${patch.name}`}
                loading="lazy"
                allowFullScreen
              />
            ))}
          </div>
        </section>
      )}

      <FileLinks links={patch.links} />
    </div>
  );
}
