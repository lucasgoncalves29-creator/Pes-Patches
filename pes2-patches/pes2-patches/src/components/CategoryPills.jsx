import { Link } from 'react-router-dom';
import styles from './CategoryPills.module.css';
import { CATEGORIES } from '../data/constants.js';

export default function CategoryPills() {
  return (
    <div className={styles.wrap}>
      {CATEGORIES.map((cat) => (
        <Link key={cat} to={`/categorias?tipo=${encodeURIComponent(cat)}`} className={styles.pill}>
          {cat}
        </Link>
      ))}
    </div>
  );
}
