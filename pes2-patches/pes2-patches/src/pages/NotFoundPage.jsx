import { Link } from 'react-router-dom';
import styles from './PatchDetailPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={`container ${styles.notFound}`}>
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não existe no PES2 Patches.</p>
      <Link to="/" className={styles.backLink}>
        ← Voltar para o início
      </Link>
    </div>
  );
}
