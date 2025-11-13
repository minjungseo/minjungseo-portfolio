import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {/* Main page (displays a grid of projects) */}
          <Route path="/" element={<HomePage />} />
          
          {/* Detail page (dynamic URL routing: /project/1, /project/2) */}
          <Route path="/project/:projectId" element={<DetailPage />} />
          
          {/* Contact page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;