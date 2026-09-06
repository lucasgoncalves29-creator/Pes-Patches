import PatchListing from './PatchListing.jsx';
import { PATCHES } from '../data/patches.js';

export default function CategoriesPage() {
  return (
    <PatchListing
      title="Categorias"
      subtitle="Explore por tipo de patch: temporada atual, retrô, Brasileirão, Libertadores e mais."
      basePatches={PATCHES}
      presetCategoryFromQuery
    />
  );
}
