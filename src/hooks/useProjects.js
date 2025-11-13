import { PROJECTS_DATA } from '../data/projects';

export const useProjects = () => {
  const getProjects = () => {
    return PROJECTS_DATA;
  };

  const getProjectById = (id) => {
    return PROJECTS_DATA.find((project) => project.id === id);
  };

  const getProjectTitle = (project) => {
    return project.title.split(':')[1]?.trim() || project.category;
  };

  const getNeighborProjects = (id) => {
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === id);
    const totalProjects = PROJECTS_DATA.length;

    const prevIndex = (currentIndex + 1) % totalProjects;
    const nextIndex = (currentIndex - 1 + totalProjects) % totalProjects;

    return {
      prevProject: PROJECTS_DATA[prevIndex],
      nextProject: PROJECTS_DATA[nextIndex],
    };
  };

  return { getProjects, getProjectById, getProjectTitle, getNeighborProjects };
};
