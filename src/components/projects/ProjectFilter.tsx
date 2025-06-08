import React from 'react';
import { Project } from '../../types';

interface ProjectFilterProps {
  projects: Project[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  projects,
  activeFilter,
  setActiveFilter,
}) => {
  // Extract unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeFilter === category
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;