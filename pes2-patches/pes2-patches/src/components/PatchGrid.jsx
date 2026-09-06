import styles from './PatchGrid.module.css';
import PatchCard from './PatchCard.jsx';

export default function PatchGrid({ patches, emptyMessage = 'Nenhum patch encontrado com esses critérios.' }) {
  if (!patches || patches.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon} aria-hidden="true">
          ⛶
        </span>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {patches.map((patch) => (
        <PatchCard key={patch.id} patch={patch} />
      ))}
    </div>
  );
}
