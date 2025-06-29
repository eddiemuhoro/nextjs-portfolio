'use client';

import { useState } from 'react';
import LazyImage from './lazy-image';

interface Project {
  title: string;
  location: string;
  description: string;
  features: string[];
  imageUrl: string;
  impact: string;
  coords: { lat: number; lng: number };
  url: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

// Project Modal Component
const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
    <div className="bg-base-100 rounded-xl shadow-lg max-w-lg w-full p-6 relative animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-xl font-bold text-gray-400 hover:text-primary"
      >
        &times;
      </button>
      <LazyImage
        src={project.imageUrl}
        alt={project.title}
        width={400}
        height={192}
        placeholder={
          <div className="w-full h-48 bg-base-300 animate-pulse rounded-xl" />
        }
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
      <div className="text-xs text-base-content text-opacity-50 mb-2">
        {project.location}
      </div>
      <p className="mb-3 text-base-content text-opacity-70">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.features.map((feature: string, i: number) => (
          <span
            key={i}
            className="badge badge-primary bg-opacity-90 text-xs px-2 py-1 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>
      <div className="text-sm text-base-content text-opacity-60">
        Results: <span className="font-semibold">{project.impact}</span>
      </div>
      {project.url && project.url !== '#' ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block btn btn-primary bg-primary text-white font-bold px-6 py-2 rounded-full shadow z-hover hover:bg-primary/80 transition"
        >
          Visit Website
        </a>
      ) : (
        <div className="mt-4 text-base-content text-opacity-70 italic text-center">
          This project is ongoing and the website is not yet live.
        </div>
      )}
    </div>
  </div>
);

export default function InteractiveProjectsGrid({
  projects,
}: ProjectsGridProps) {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="card shadow-lg bg-base-100 z-hover transition-transform duration-200 hover:shadow-2xl hover:scale-105 cursor-pointer flex flex-col animate-fadeInUp"
            style={{ animationDelay: `${idx * 100}ms` }}
            onClick={() => setModalProject(project)}
          >
            <div className="relative">
              <LazyImage
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={192}
                placeholder={
                  <div className="w-full h-48 bg-base-300 animate-pulse rounded-t-xl" />
                }
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-1 text-base-content opacity-80">
                {project.title}
              </h3>
              <div className="text-xs text-base-content text-opacity-50 mb-2">
                {project.location}
              </div>
              <p className="text-base-content text-opacity-70 text-sm mb-3 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.features.map((feature: string, i: number) => (
                  <span
                    key={i}
                    className="badge badge-primary bg-opacity-90 text-xs px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </>
  );
}
