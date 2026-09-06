import { useSearchParams } from 'react-router-dom';
import PatchListing from './PatchListing.jsx';
import { PATCHES } from '../data/patches.js';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';

  return (
    <PatchListing
      title="Resultado da pesquisa"
      subtitle={q ? `Mostrando resultados para "${q}"` : 'Digite um termo para pesquisar patches.'}
      basePatches={PATCHES}
    />
  );
}
