import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PatchGrid from '../components/PatchGrid.jsx';
import FilterPanel from '../components/FilterPanel.jsx';
import { searchPatches, filterPatches, getAvailableYears } from '../utils/filterPatches.js';
import { PATCHES } from '../data/patches.js';
import styles from './PatchListing.module.css';

const EMPTY_FILTERS = { baseGame: [], category: [], region: [], year: [] };

export default function PatchListing({ title, subtitle, basePatches, presetCategoryFromQuery = false }) {
  const [searchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('q') || '';
  const tipoFromUrl = searchParams.get('tipo') || '';

  const [query, setQuery] = useState(queryFromUrl);
  const [filters, setFilters] = useState(() => ({
    ...EMPTY_FILTERS,
    category: presetCategoryFromQuery && tipoFromUrl ? [tipoFromUrl] : []
  }));

  useEffect(() => {
    setQuery(queryFromUrl);
  }, [queryFromUrl]);

  useEffect(() => {
    if (presetCategoryFromQuery && tipoFromUrl) {
      setFilters((f) => ({ ...f, category: [tipoFromUrl] }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tipoFromUrl]);

  const source = basePatches || PATCHES;
  const years = useMemo(() => getAvailableYears(source), [source]);

  const results = useMemo(() => {
    const searched = searchPatches(source, query);
    return filterPatches(searched, filters);
  }, [source, query, filters]);

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.head}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </header>

      <div className={styles.searchRow}>
        <label htmlFor="listing-search" className="visually-hidden">
          Pesquisar patches
        </label>
        <input
          id="listing-search"
          type="search"
          className={styles.searchInput}
          placeholder='Pesquisar por nome, temporada, "Libertadores", "2026"…'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <FilterPanel filters={filters} onChange={setFilters} years={years} />

      <p className={styles.count}>
        {results.length} {results.length === 1 ? 'patch encontrado' : 'patches encontrados'}
      </p>

      <PatchGrid patches={results} />
    </div>
  );
}
