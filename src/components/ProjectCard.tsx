import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  year: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetail?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetail }) => {
  return (
    <div
      onClick={() => onOpenDetail?.(project)}
      className="group flex flex-col cursor-pointer transition-all duration-300"
    >
      {/* Project Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border border-[#EAEAEA] mb-5">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Meta / Content */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Small Category Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-sans tracking-[0.18em] text-[#777777] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Title */}
          <h3 className="font-serif-editorial text-2xl sm:text-[26px] text-[#0A0A0A] font-normal leading-snug group-hover:text-neutral-700 transition-colors">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="font-sans text-xs text-[#666666] leading-relaxed mt-1 font-normal line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Circular Arrow Button */}
        <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:border-[#0A0A0A] group-hover:text-white transition-all duration-300">
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};
