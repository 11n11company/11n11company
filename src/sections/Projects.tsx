import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { ProjectCard, ProjectItem } from '../components/ProjectCard';

import oxentraImg from '../assets/projects/oxentra-pharma.png';
import pattyImg from '../assets/projects/patty-project.png';
import fastrackImg from '../assets/projects/fastrack-eduhub.png';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projectsData: ProjectItem[] = [
    {
      id: '01',
      title: 'Oxentra Pharma',
      category: 'Healthcare & Pharma',
      tags: ['Healthcare', 'Web Experience'],
      description:
        'Delivering high-quality, reliable and affordable pharmaceutical products designed to support better health outcomes.',
      imageUrl: oxentraImg,
      year: '2025',
      link: 'https://www.oxentrapharma.com/',
    },
    {
      id: '02',
      title: 'Patty Project London',
      category: 'Food & Hospitality',
      tags: ['E-Commerce', 'Brand Flagship'],
      description:
        'London-made smash burgers and bold flavours paired with a sleek, high-impact digital ordering destination.',
      imageUrl: pattyImg,
      year: '2025',
    },
    {
      id: '03',
      title: 'Fastrack Edu Hub',
      category: 'EdTech & Learning',
      tags: ['EdTech', 'Certification Portal'],
      description:
        'A modern educational institution platform providing fast-track learning opportunities and recognized university certifications.',
      imageUrl: fastrackImg,
      year: '2026',
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#777777] block mb-3">
              SELECTED WORK
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0A0A0A] tracking-tight leading-tight">
              Real businesses.
              <br />
              <span className="italic font-light">Real products.</span>
            </h2>
          </div>

          <div>
            <a
              href="#contact"
              className="group inline-flex items-center text-xs font-medium uppercase tracking-[0.16em] text-[#0A0A0A] hover:text-neutral-600 transition-colors pb-1 border-b border-black"
            >
              <span>View All Projects</span>
              <ArrowRight
                size={14}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* 3 Project Cards in One Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetail={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Lightbox / Drawer */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-2xl w-full p-8 sm:p-10 border border-neutral-300 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-black"
            >
              <X size={20} />
            </button>
            <div className="aspect-[3/2] w-full overflow-hidden bg-neutral-100 mb-6 border border-neutral-200">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 mb-2">
              {selectedProject.tags.map((t) => (
                <span key={t} className="text-[10px] tracking-widest uppercase font-mono text-neutral-500">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="font-serif-editorial text-3xl font-normal text-black mb-3">
              {selectedProject.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {selectedProject.description}
            </p>
            {selectedProject.link && (
              <div className="mt-6 pt-5 border-t border-neutral-100 flex justify-end">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0A0A0A] text-white text-xs font-medium uppercase tracking-[0.14em] hover:bg-neutral-800 transition-all duration-300 shadow-xs"
                >
                  <span>Visit Live Website</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
