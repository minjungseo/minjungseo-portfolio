import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="header-container">
            <nav>
                <Link to="/">PROJECT</Link> 
                {/* <Link to="/about">ABOUT</Link>  */}
                <Link to="/contact">CONTACT</Link>
            </nav>
        </div>
    </header>
);

export default Header;