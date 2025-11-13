import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import SEO from '../components/seo/Helmet';
import '../styles/Home.css';

const HomePage = () => {
    const { getProjects, getProjectTitle } = useProjects();
    const projects = getProjects();

    return (
        <>
            <SEO 
                title="minjungseo"
                description="A portfolio of web development projects by Minjung Seo."
                keywords="Minjung Seo, portfolio, designer"
            />
            {/* Spacing for the header */}
            <section id="about" className="about-section"></section> 

            <section id="projects">
                <div className="grid-container">
                    {projects.map((project) => (
                        <Link 
                            key={project.id} 
                            to={`/project/${project.id}`} 
                            className="grid-item"
                        >
                            <img src={project.thumbnail} alt={project.title} />
                            <div className="project-info">{getProjectTitle(project)}</div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;