import { Routes, Route, useLocation } from 'react-router-dom'; // ⭐ useLocation 추가 ⭐
import ScrollToTop from './components/ScrollToTop'; // ⭐ 새로 임포트 ⭐
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ContactPage from './pages/ContactPage';

function App() {
  // 현재 URL 경로 정보를 가져옵니다.
  const location = useLocation(); 

  // 현재 경로가 '/contact'인지 확인합니다.
  const isContactPage = location.pathname === '/contact'; 

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {/* 메인 페이지 (Grid 표시) */}
          <Route path="/" element={<HomePage />} />
          
          {/* 상세 페이지 (동적 URL 라우팅: /project/1, /project/2) */}
          <Route path="/project/:projectId" element={<DetailPage />} />
          
          {/* Contact 페이지 */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      
      {/* ⭐ 조건부 렌더링 ⭐ */}
      {/* Contact 페이지가 아닐 때만 Footer를 렌더링합니다. */}
      {!isContactPage && <Footer />} 
    </>
  );
}

export default App;