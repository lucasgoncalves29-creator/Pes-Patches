import { Link } from 'react-router-dom';
import styles from './Section.module.css';

export default function Section({ title, subtitle, seeAllTo, children }) {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.head}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {seeAllTo && (
          <Link to={seeAllTo} className={styles.seeAll}>
            Ver tudo →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
