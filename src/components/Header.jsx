import React from 'react';
// 1. useLocation 훅을 새로 가져옵니다.
import { Link, useLocation } from 'react-router-dom'; 

const Header = () => {
    // 2. 현재 URL 경로 정보를 가져옵니다.
    const location = useLocation();
    const currentPath = location.pathname;

    // 3. 현재 경로에 따라 'active' 클래스를 반환하는 함수
    const isActive = (path) => {
        // 루트 경로('/')는 다른 모든 경로에 포함되므로, 
        // '/'인 경우 정확히 '/'일 때만 'active'로 설정합니다.
        if (path === '/') {
            return currentPath === '/' ? 'active' : '';
        }
        // 나머지 경로는 해당 경로로 시작하면 'active'로 설정합니다.
        // 예: '/about' 또는 '/about/subpage' 모두 active
        return currentPath.startsWith(path) ? 'active' : '';
    };

    return (
        <header>
            <div className="header-container">
                <nav>
                    {/* Link 컴포넌트에 동적으로 className을 추가 */}
                    <Link to="/about" className={isActive('/about')}>
                        ABOUT
                    </Link> 
                    
                    <Link to="/" className={isActive('/')}>
                        PROJECT
                    </Link> 
                    
                    <Link to="/contact" className={isActive('/contact')}>
                        CONTACT
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;