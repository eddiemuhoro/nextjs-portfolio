'use client';

import dynamic from 'next/dynamic';

// Dynamically import ProjectMap with SSR disabled since it uses browser APIs
const ProjectMap = dynamic(() => import('./ProjectMap'), { ssr: false });

interface Project {
  title: string;
  location: string;
  coords: { lat: number; lng: number };
}

interface ProjectMapWrapperProps {
  projects: Project[];
}

const ProjectMapWrapper: React.FC<ProjectMapWrapperProps> = ({ projects }) => {
  return <ProjectMap projects={projects} />;
};

export default ProjectMapWrapper;
