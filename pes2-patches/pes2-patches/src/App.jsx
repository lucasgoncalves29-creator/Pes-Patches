import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import PesPage from './pages/PesPage.jsx';
import WinningElevenPage from './pages/WinningElevenPage.jsx';
import AllPatchesPage from './pages/AllPatchesPage.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import PatchDetailPage from './pages/PatchDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pes" element={<PesPage />} />
          <Route path="/winning-eleven" element={<WinningElevenPage />} />
          <Route path="/patches" element={<AllPatchesPage />} />
          <Route path="/categorias" element={<CategoriesPage />} />
          <Route path="/pesquisa" element={<SearchResultsPage />} />
          <Route path="/favoritos" element={<FavoritesPage />} />
          <Route path="/patch/:slug" element={<PatchDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
