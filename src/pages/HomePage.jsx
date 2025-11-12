import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';

const HomePage = () => {
    return (
        <>
            {/* Header와의 간격 확보 (section#about 역할) */}
            <section id="about" style={{ minHeight: '50px' }}></section> 

            <section id="projects">
                <div className="grid-container">
                    {PROJECTS_DATA.map((project) => (
                        // Link 컴포넌트로 상세 페이지 연결
                        <Link 
                            key={project.id} 
                            to={`/project/${project.id}`} 
                            className="grid-item"
                        >
                            <img src={project.thumbnail} alt={project.title} />
                            <div className="project-info">{project.title.split(':')[1]?.trim() || project.category}</div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 푸터 위 여백 확보 */}
            {/* <section id="contact"></section> */}
        </>
    );
};

export default HomePage;