import PatchListing from './PatchListing.jsx';
import { PATCHES } from '../data/patches.js';

const wePatches = PATCHES.filter((p) => p.baseGame.startsWith('we'));

export default function WinningElevenPage() {
  return (
    <PatchListing
      title="Winning Eleven"
      subtitle="Patches com base nos títulos Winning Eleven lançados para PS2."
      basePatches={wePatches}
    />
  );
}
