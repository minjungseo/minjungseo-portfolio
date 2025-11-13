import React, { useEffect } from 'react';
import SEO from '../components/seo/Helmet';

const ContactPage = () => {
    
    useEffect(() => {
        // When the Contact page is visible (on mount), add classes to the body
        document.body.classList.add('no-scroll', 'contact-dark');

        // When the Contact page is left (on unmount), remove the classes
        return () => {
            document.body.classList.remove('no-scroll', 'contact-dark');
        };
    }, []); 

    return (
        <>
            <SEO 
                title="Contact - Minjung Seo"
                description="Contact information for Minjung Seo."
                keywords="contact, email, linkedin, instagram"
            />
            <div className="contact-content">
                <img
                    src="/assets/contact_banner.jpg" 
                    alt="Contact Page Banner" 
                    className="contact-image-banner"
                />
                
                <p>Email: <a href="mailto:minjungseo01@email.com"> minjungseo01@email.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank">Profile</a></p>
                <p>Instagram: <a href="https://www.instagram.com/joesarcv/?next=%2F" target="_blank">@joesarcv</a></p>
            </div>
        </>
    );
};

export default ContactPage;