import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'pes2patches.favorites';

function readStoredFavorites() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(readStoredFavorites);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // localStorage indisponível — favoritos seguem funcionando apenas na sessão atual
    }
  }, [favorites]);

  const isFavorite = useCallback((slug) => favorites.includes(slug), [favorites]);

  const toggleFavorite = useCallback((slug) => {
    setFavorites((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }, []);

  return { favorites, isFavorite, toggleFavorite };
}
