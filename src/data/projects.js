// src/data/projects.js

export const PROJECTS_DATA = [
 
  { 
    id: 5, 
    title: "프로젝트 5: Graphic Illustration", 
    category: "Graphic", 
    thumbnail: "/assets/5.jpg", 
    content: { 
      detailImages: ["/assets/detail/detail5.jpg"], 
      keywords: ["Illustrator", "Vector Art", "Visual Communication"] 
    } 
  },

  { 
    id: 4, 
    title: "프로젝트 4: Mobile App Onboarding", 
    category: "Mobile App", 
    thumbnail: "/assets/4.jpg", 
    content: { 
      detailImages: ["/assets/detail/detail4.jpg"], 
      keywords: ["Onboarding", "UX Writing", "Flow Design"] 
    } 
  },

   { 
    id: 3, 
    title: "프로젝트 3: Web Design Portfolio", 
    category: "Web Design", 
    thumbnail: "/assets/3.jpg", 
    content: { 
      detailImages: ["/assets/detail/detail3.jpg"], 
      keywords: ["Responsive", "HTML/CSS", "JavaScript"] 
    } 
  },

{
    id: 2,
    title: "프로젝트 2: UX/UI 모바일 앱 개선",
    category: "UX/UI",
    thumbnail: "/assets/2.jpg",
    content: {
      detailImages: [
          "/assets/detail/project2_research.jpg", // 예시 1
          "/assets/detail/project2_wireframe.png",// 예시 2
          "/assets/detail/project2_finalui.png"   // 예시 3
      ],
      keywords: ["User Research", "Wireframing", "A/B Testing"],
    }
  },

  {
    id: 1,
    title: "Project 1: Apple Banana, 2025",
    category: "branding",
    type: "Personal",
    thumbnail: "/assets/1.jpg", 
    content: {
      detailImages: [
          "/assets/detail/project1_01.jpg", 
          "/assets/detail/project1_02.jpg",   
          "/assets/detail/project1_03.jpg"
      ],
      keywords: ["CI/BI", "Typography", "Visual Guide"],
    }
  },
  

];