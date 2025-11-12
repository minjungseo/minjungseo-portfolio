import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'; // 글로벌 CSS 로드

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter로 전체 앱을 감싸 경로 라우팅 활성화 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);