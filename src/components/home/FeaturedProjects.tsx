import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/sampleData';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../projects/ProjectCard';

const FeaturedProjects: React.FC = () => {
  // Filter featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Check out some of my recent work that showcases my skills and expertise."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 200}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            to="/projects"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;