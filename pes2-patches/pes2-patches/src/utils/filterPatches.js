function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function searchPatches(patches, query) {
  if (!query || !query.trim()) return patches;
  const q = normalize(query.trim());
  return patches.filter((patch) => {
    const haystack = normalize(
      [
        patch.name,
        patch.baseGame,
        patch.season,
        patch.version,
        patch.developer,
        ...(patch.categories || [])
      ].join(' ')
    );
    return haystack.includes(q);
  });
}

export function filterPatches(patches, filters) {
  return patches.filter((patch) => {
    if (filters.baseGame && filters.baseGame.length > 0 && !filters.baseGame.includes(patch.baseGame)) {
      return false;
    }
    if (filters.category && filters.category.length > 0) {
      const hasCategory = patch.categories.some((c) => filters.category.includes(c));
      if (!hasCategory) return false;
    }
    if (filters.region && filters.region.length > 0 && !filters.region.includes(patch.region)) {
      return false;
    }
    if (filters.year && filters.year.length > 0) {
      const patchYear = (patch.season.match(/\d{4}/g) || []).pop();
      if (!patchYear || !filters.year.includes(patchYear)) return false;
    }
    return true;
  });
}

export function getAvailableYears(patches) {
  const years = new Set();
  patches.forEach((patch) => {
    const found = patch.season.match(/\d{4}/g) || [];
    found.forEach((y) => years.add(y));
  });
  return Array.from(years).sort((a, b) => b - a);
}
