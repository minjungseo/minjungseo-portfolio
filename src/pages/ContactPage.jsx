// src/pages/ContactPage.jsx

import React, { useEffect } from 'react';
// import ... (나머지 import 유지)

const ContactPage = () => {
    
    useEffect(() => {
        // Contact 페이지가 보일 때 (마운트 시) body에 클래스 추가
        document.body.classList.add('no-scroll');
        document.body.classList.add('contact-dark'); // ⭐ 이 줄을 추가 ⭐

        // Contact 페이지를 떠날 때 (언마운트 시) 클래스 제거
        return () => {
            document.body.classList.remove('no-scroll');
            document.body.classList.remove('contact-dark'); // ⭐ 이 줄을 추가 ⭐
        };
    }, []); 

    return (
        <div className="contact-content">
            {/* ⭐⭐ 수정: 이 부분을 제거합니다. ⭐⭐ 
            <h2 style={{marginTop: '100px'}}>Contact Me</h2>
            */}
            <img 
                src="/assets/contact_banner.jpg" 
                alt="Contact Page Banner" 
                className="contact-image-banner"
            />
            
            {/* 남은 텍스트는 <p> 태그 안에 유지됩니다. */}
            <p>Email: <a href="mailto:minjungseo01@email.com"> minjungseo01@email.com</a></p>
            <p>LinkedIn: <a href="[당신의 LinkedIn 주소]" target="_blank">Profile</a></p>
            <p>Instagram: <a href="https://www.instagram.com/joesarcv/?next=%2F" target="_blank">@joesarcv</a></p>
        </div>
    );
};

export default ContactPage;