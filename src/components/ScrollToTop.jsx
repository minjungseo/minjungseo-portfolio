// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // 현재 URL 경로 정보를 가져옵니다.
  const { pathname } = useLocation();

  useEffect(() => {
    // pathname(경로)가 변경될 때마다 페이지를 맨 위로 스크롤합니다.
    window.scrollTo(0, 0); 
  }, [pathname]); // pathname이 의존성 배열에 있으므로, 경로 변경 시마다 실행됩니다.

  return null; // 렌더링할 UI는 없습니다.
};

export default ScrollToTop;