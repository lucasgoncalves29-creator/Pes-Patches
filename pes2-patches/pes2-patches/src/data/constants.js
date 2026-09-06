export const BASE_GAMES = [
  { id: 'pes6', label: 'PES 6', franchise: 'PES' },
  { id: 'pes2008', label: 'PES 2008', franchise: 'PES' },
  { id: 'pes2009', label: 'PES 2009', franchise: 'PES' },
  { id: 'pes2010', label: 'PES 2010', franchise: 'PES' },
  { id: 'pes2011', label: 'PES 2011', franchise: 'PES' },
  { id: 'pes2012', label: 'PES 2012', franchise: 'PES' },
  { id: 'pes2013', label: 'PES 2013', franchise: 'PES' },
  { id: 'pes2014', label: 'PES 2014', franchise: 'PES' },
  { id: 'we9', label: 'Winning Eleven 9', franchise: 'WE' },
  { id: 'we10', label: 'Winning Eleven 10', franchise: 'WE' },
  { id: 'we11', label: 'Winning Eleven 11', franchise: 'WE' },
  { id: 'we-outros', label: 'Outros títulos WE', franchise: 'WE' }
];

export const CATEGORIES = [
  'Temporada atual',
  'Retrô',
  'Brasileirão',
  'Libertadores',
  'Mundial de Clubes',
  'Seleções',
  'Futebol europeu',
  'Futebol sul-americano',
  'Master League',
  'Patch clássico',
  'Patch alternativo'
];

export const REGIONS = ['PAL', 'NTSC-U', 'NTSC-J'];

export const CONTENT_TAGS = [
  'Elencos atualizados',
  'Uniformes',
  'Faces',
  'Estádios',
  'Placas',
  'Menu',
  'Chuteiras',
  'Bolas',
  'Competições',
  'Gráficos',
  'Narração'
];

export function baseGameLabel(id) {
  const g = BASE_GAMES.find((b) => b.id === id);
  return g ? g.label : id;
}
