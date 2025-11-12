// src/pages/DetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';
import '../styles/Detail.css'; 

const DetailPage = () => {
  const { projectId } = useParams(); 
  const currentId = parseInt(projectId);

  // 1. 현재 프로젝트 인덱스 찾기
  const currentIndex = PROJECTS_DATA.findIndex(p => p.id === currentId);
  const project = PROJECTS_DATA[currentIndex];

  if (!project) {
    return (
        <section className="project-detail">
            <h2 style={{marginTop: '100px'}}>오류</h2>
            <p>해당 프로젝트 정보를 찾을 수 없습니다.</p>
            <Link to="/">메인으로 돌아가기</Link>
        </section>
    );
  }

  // 2. 이전/다음 프로젝트 인덱스 계산
  const totalProjects = PROJECTS_DATA.length;
  
  // ⭐ 이전 프로젝트 인덱스: 배열에서 다음 인덱스(더 오래된 프로젝트)를 가리킵니다.
  const prevIndex = (currentIndex + 1) % totalProjects; 
  
  // ⭐ 다음 프로젝트 인덱스: 배열에서 이전 인덱스(더 최신 프로젝트)를 가리킵니다.
  const nextIndex = (currentIndex - 1 + totalProjects) % totalProjects;

  const prevProject = PROJECTS_DATA[prevIndex];
  const nextProject = PROJECTS_DATA[nextIndex];

  return (
    <section className="project-detail">
        
        {/* 1. 맨 상단에 프로젝트 제목 및 카테고리 표시 (유지) */}
        <div className="project-header-info">
            <h2>{project.title}</h2>
            <p className="project-category">{project.category}</p>
            <p className="project-type">{project.type}</p>
            
        </div>
        
        {/* 2. 프로젝트 상세 이미지 리스트 (유지) */}
        <div className="project-image-list">
            {project.content.detailImages.map((imgSrc, index) => (
                <img 
                    key={index} 
                    src={imgSrc} 
                    alt={`${project.title} 상세 이미지 ${index + 1}`} 
                    className="project-image-full" 
                />
            ))}
        </div>

    

      {/* 4. 이전/다음 프로젝트 네비게이션 컨테이너 수정 */}
        <div className="project-navigation-container">
            
            {/* 이전 프로젝트 링크 수정 */}
            <Link to={`/project/${prevProject.id}`} className="nav-link prev">
              {/* ⭐ 이전 프로젝트 제목 대신 고정 텍스트로 변경 ⭐ */}
              <h3 className="nav-title">← PREVIOUS PROJECT</h3>
            </Link>
            
            {/* 다음 프로젝트 링크 수정 */}
            <Link to={`/project/${nextProject.id}`} className="nav-link next">
              {/* ⭐ 다음 프로젝트 제목 대신 고정 텍스트로 변경 ⭐ */}
              <h3 className="nav-title">NEXT PROJECT →</h3>
            </Link>
        </div>
    </section>
  );
};

export default DetailPage;