import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import SEO from '../components/seo/Helmet';
import '../styles/Detail.css'; 

const DetailPage = () => {
  const { projectId } = useParams(); 
  const currentId = parseInt(projectId);
  const { getProjectById, getNeighborProjects } = useProjects();

  const project = getProjectById(currentId);

  if (!project) {
    return (
        <section className="project-detail">
            <h2 className="error-title">Error</h2>
            <p>Project not found.</p>
            <Link to="/">Return to Home</Link>
        </section>
    );
  }

  const { prevProject, nextProject } = getNeighborProjects(currentId);

  return (
    <>
      <SEO 
        title="minjungseo"
        description={project.title}
        keywords={project.category}
      />
      <section className="project-detail">
          
          {/* 1. Project header with title and category */}
          <div className="project-header-info">
              <h2>{project.title}</h2>
              <p className="project-category">{project.category}</p>
              <p className="project-type">{project.type}</p>
          </div>
          
          {/* 2. List of project detail images */}
          <div className="project-image-list">
              {project.content.detailImages.map((imgSrc, index) => (
                  <img 
                      key={index} 
                      src={imgSrc} 
                      alt={`${project.title} detail image ${index + 1}`} 
                      className="project-image-full" 
                  />
              ))}
          </div>

          {/* 4. Navigation to previous/next project */}
          <div className="project-navigation-container">
              
              {/* Link to the previous project */}
              <Link to={`/project/${prevProject.id}`} className="nav-link prev">
                <h3 className="nav-title">← PREVIOUS PROJECT</h3>
              </Link>
              
              {/* Link to the next project */}
              <Link to={`/project/${nextProject.id}`} className="nav-link next">
                <h3 className="nav-title">NEXT PROJECT →</h3>
              </Link>
          </div>
      </section>
    </>
  );
};

export default DetailPage;