import PatchListing from './PatchListing.jsx';
import { PATCHES } from '../data/patches.js';

const pesPatches = PATCHES.filter((p) => p.baseGame.startsWith('pes'));

export default function PesPage() {
  return (
    <PatchListing
      title="PES"
      subtitle="Todos os patches com base em jogos da série PES (Pro Evolution Soccer) para PS2."
      basePatches={pesPatches}
    />
  );
}
