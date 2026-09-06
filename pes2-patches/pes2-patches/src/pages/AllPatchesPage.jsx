import PatchListing from './PatchListing.jsx';
import { PATCHES } from '../data/patches.js';

export default function AllPatchesPage() {
  return (
    <PatchListing
      title="Todos os patches"
      subtitle="Catálogo completo de patches de PES e Winning Eleven para PS2."
      basePatches={PATCHES}
    />
  );
}
