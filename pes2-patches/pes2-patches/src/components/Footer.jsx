import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <span className={styles.logoBadge}>P2</span>
            PES2 <strong>Patches</strong>
          </div>
          <p className={styles.about}>
            Catálogo e central de direcionamento para patches de PES e Winning Eleven no PlayStation 2,
            mantido pela comunidade.
          </p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>Navegar</h3>
          <Link to="/pes">PES</Link>
          <Link to="/winning-eleven">Winning Eleven</Link>
          <Link to="/patches">Todos os patches</Link>
          <Link to="/categorias">Categorias</Link>
          <Link to="/favoritos">Favoritos</Link>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>Aviso importante</h3>
          <p className={styles.legal}>
            Este site não hospeda arquivos comerciais protegidos por direitos autorais. Todos os botões de
            download apontam para fontes externas cadastradas e autorizadas pelo administrador do catálogo.
            PES, Winning Eleven e nomes de clubes citados pertencem aos seus respectivos detentores de
            direitos e são mencionados apenas para fins de identificação e catalogação.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} PES2 Patches — projeto de comunidade, não comercial.</span>
      </div>
    </footer>
  );
}
