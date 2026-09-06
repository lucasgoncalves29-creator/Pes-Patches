import { useMemo } from 'react';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import CategoryPills from '../components/CategoryPills.jsx';
import PatchGrid from '../components/PatchGrid.jsx';
import { PATCHES } from '../data/patches.js';

function sortByDateDesc(list, key) {
  return [...list].sort((a, b) => new Date(b[key]) - new Date(a[key]));
}

export default function Home() {
  const featuredHero = useMemo(
    () => sortByDateDesc(PATCHES.filter((p) => p.featured), 'updateDate')[0] || PATCHES[0],
    []
  );

  const featured = useMemo(() => PATCHES.filter((p) => p.featured).slice(0, 4), []);
  const recent = useMemo(() => sortByDateDesc(PATCHES, 'updateDate').slice(0, 4), []);
  const mostAccessed = useMemo(
    () => [...PATCHES].sort((a, b) => b.downloads - a.downloads).slice(0, 4),
    []
  );
  const pesPopular = useMemo(
    () =>
      [...PATCHES]
        .filter((p) => p.baseGame.startsWith('pes'))
        .sort((a, b) => b.downloads - a.downloads)
        .slice(0, 4),
    []
  );
  const weList = useMemo(
    () => [...PATCHES].filter((p) => p.baseGame.startsWith('we')).slice(0, 4),
    []
  );

  return (
    <>
      <Hero patch={featuredHero} />

      <Section title="Categorias de patch">
        <CategoryPills />
      </Section>

      <Section title="Patches em destaque" subtitle="Selecionados pela equipe do catálogo" seeAllTo="/patches">
        <PatchGrid patches={featured} />
      </Section>

      <Section title="Lançamentos recentes" subtitle="As últimas atualizações cadastradas" seeAllTo="/patches">
        <PatchGrid patches={recent} />
      </Section>

      <Section title="Mais acessados" subtitle="Os patches mais visitados pela comunidade" seeAllTo="/patches">
        <PatchGrid patches={mostAccessed} />
      </Section>

      <Section title="PES mais populares" seeAllTo="/pes">
        <PatchGrid patches={pesPopular} />
      </Section>

      <Section title="Winning Eleven" seeAllTo="/winning-eleven">
        <PatchGrid patches={weList} />
      </Section>
    </>
  );
}
