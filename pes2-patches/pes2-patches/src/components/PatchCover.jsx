import styles from './PatchCover.module.css';
import { baseGameLabel } from '../data/constants.js';

// 6 duplas de cor por "seed", para variar a capa gerada sem depender de
// imagens reais (o site não hospeda artes de jogos protegidos).
const PALETTES = [
  ['#1c3a8f', '#0a1330'],
  ['#0f6b4a', '#08211a'],
  ['#7a1f3d', '#230a14'],
  ['#3b6ef5', '#0a1024'],
  ['#8a5a12', '#241608'],
  ['#4b2e83', '#150c26']
];

function abbreviate(baseGameId) {
  const label = baseGameLabel(baseGameId);
  return label
    .replace('Winning Eleven', 'WE')
    .replace('PES ', 'PES')
    .replace(/\s+/g, '')
    .slice(0, 7);
}

export default function PatchCover({ patch, size = 'md' }) {
  const palette = PALETTES[(patch.coverSeed || 0) % PALETTES.length];
  return (
    <div
      className={`${styles.cover} ${styles[size]}`}
      style={{ '--c1': palette[0], '--c2': palette[1] }}
      role="img"
      aria-label={`Capa ilustrativa de ${patch.name}`}
    >
      <span className={styles.notch} aria-hidden="true" />
      <div className={styles.scan} aria-hidden="true" />
      <span className={styles.tag}>{abbreviate(patch.baseGame)}</span>
      <span className={styles.season}>{patch.season}</span>
    </div>
  );
}
