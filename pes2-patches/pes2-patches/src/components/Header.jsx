import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { useFavoritesContext } from '../hooks/FavoritesContext.jsx';

const NAV_LINKS = [
  { to: '/', label: 'Início', end: true },
  { to: '/pes', label: 'PES' },
  { to: '/winning-eleven', label: 'Winning Eleven' },
  { to: '/patches', label: 'Patches' },
  { to: '/categorias', label: 'Categorias' }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { favorites } = useFavoritesContext();
  const navigate = useNavigate();

  function handleSearchSubmit(e) {
    e.preventDefault();
    setMenuOpen(false);
    navigate(`/pesquisa?q=${encodeURIComponent(searchValue.trim())}`);
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoBadge}>P2</span>
          <span className={styles.logoText}>
            PES2 <strong>Patches</strong>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <form className={styles.searchForm} onSubmit={handleSearchSubmit} role="search">
            <label htmlFor="header-search" className="visually-hidden">
              Pesquisar patches
            </label>
            <input
              id="header-search"
              type="search"
              placeholder="Buscar PES 2013, Libertadores, 2026…"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton} aria-label="Pesquisar">
              🔍
            </button>
          </form>

          <Link to="/favoritos" className={styles.favLink} aria-label={`Favoritos (${favorites.length})`}>
            <span aria-hidden="true">★</span>
            <span className={styles.favCount}>{favorites.length}</span>
          </Link>

          <button
            className={styles.burger}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobilePanel}>
          <form className={styles.mobileSearchForm} onSubmit={handleSearchSubmit} role="search">
            <label htmlFor="mobile-search" className="visually-hidden">
              Pesquisar patches
            </label>
            <input
              id="mobile-search"
              type="search"
              placeholder="Buscar patches…"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton} aria-label="Pesquisar">
              🔍
            </button>
          </form>
          <nav className={styles.mobileNav} aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/favoritos" onClick={() => setMenuOpen(false)} className={styles.mobileLink}>
              Favoritos ({favorites.length})
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
