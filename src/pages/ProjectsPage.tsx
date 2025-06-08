import React, { useState, useEffect } from 'react';
import { projects } from '../data/sampleData';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    document.title = 'Projects | John Doe Portfolio';
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Projects" 
          subtitle="Browse through my recent projects and explore the different technologies I've worked with."
        />
        
        <ProjectFilter 
          projects={projects}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No projects found with the selected filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;