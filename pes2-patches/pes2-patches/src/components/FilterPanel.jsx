import { useState } from 'react';
import styles from './FilterPanel.module.css';
import { BASE_GAMES, CATEGORIES, REGIONS } from '../data/constants.js';

function FilterGroup({ title, options, selected, onToggle, getLabel = (o) => o, getValue = (o) => o }) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.groupTitle}>{title}</legend>
      <div className={styles.options}>
        {options.map((opt) => {
          const value = getValue(opt);
          const checked = selected.includes(value);
          return (
            <label key={value} className={`${styles.option} ${checked ? styles.optionChecked : ''}`}>
              <input type="checkbox" checked={checked} onChange={() => onToggle(value)} />
              {getLabel(opt)}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function FilterPanel({ filters, onChange, years }) {
  const [open, setOpen] = useState(false);

  function toggleValue(key, value) {
    const current = filters[key] || [];
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    onChange({ ...filters, [key]: next });
  }

  function clearAll() {
    onChange({ baseGame: [], category: [], region: [], year: [] });
  }

  const activeCount =
    (filters.baseGame?.length || 0) +
    (filters.category?.length || 0) +
    (filters.region?.length || 0) +
    (filters.year?.length || 0);

  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.toggle} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>Filtros{activeCount > 0 ? ` (${activeCount})` : ''}</span>
        <span aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
        <FilterGroup
          title="Jogo base"
          options={BASE_GAMES}
          selected={filters.baseGame || []}
          onToggle={(v) => toggleValue('baseGame', v)}
          getLabel={(g) => g.label}
          getValue={(g) => g.id}
        />
        <FilterGroup
          title="Categoria"
          options={CATEGORIES}
          selected={filters.category || []}
          onToggle={(v) => toggleValue('category', v)}
        />
        <FilterGroup
          title="Região"
          options={REGIONS}
          selected={filters.region || []}
          onToggle={(v) => toggleValue('region', v)}
        />
        {years.length > 0 && (
          <FilterGroup
            title="Ano da temporada"
            options={years}
            selected={filters.year || []}
            onToggle={(v) => toggleValue('year', v)}
          />
        )}

        {activeCount > 0 && (
          <button type="button" className={styles.clear} onClick={clearAll}>
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  );
}
