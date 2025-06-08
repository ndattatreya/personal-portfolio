import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/sampleData';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState(projects.find(p => p.id === id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!project) {
      // If project not found, redirect to projects page
      navigate('/projects');
      return;
    }
    
    document.title = `${project.title} | Dattatreya Portfolio`;
  }, [id, project, navigate]);
  
  if (!project) return null;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          to="/projects" 
          variant="ghost" 
          className="mb-8"
          icon={<ArrowLeft size={18} />}
        >
          Back to Projects
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <AnimatedSection className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto aspect-video object-cover"
              />
              <div className="p-8">
                <div className="flex flex-wrap justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h1>
                  <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium mt-2 sm:mt-0">
                    <Calendar size={16} className="mr-1" />
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </span>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                  <p>{project.description}</p>
                  {/* Additional project details would go here */}
                  <p>
                    This is an expanded description of the project that would include more details about the
                    challenges faced, solutions implemented, and the overall impact of the project. This could
                    be multiple paragraphs describing various aspects of the development process.
                  </p>
                  <p>
                    The project was built with user experience in mind, focusing on responsive design and 
                    performance optimization. The interface was designed to be intuitive and accessible,
                    ensuring a seamless experience across all devices.
                  </p>
                  <h3>Key Features</h3>
                  <ul>
                    <li>Responsive design that works on all devices</li>
                    <li>Optimized performance with lazy loading and code splitting</li>
                    <li>Secure authentication and data protection</li>
                    <li>Intuitive user interface with modern design principles</li>
                    <li>Comprehensive API integration for real-time data</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.projectUrl && (
                    <Button 
                      href={project.projectUrl}
                      icon={<ExternalLink size={18} />}
                    >
                      Visit Project
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      href={project.githubUrl}
                      variant="outline"
                      icon={<Github size={18} />}
                    >
                      View Source
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-1" delay={200}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Project Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                    Category
                  </h4>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {project.category}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                    Completed
                  </h4>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                    Technologies
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Other Projects
                </h3>
                
                <div className="space-y-4">
                  {projects
                    .filter(p => p.id !== project.id)
                    .slice(0, 3)
                    .map(p => (
                      <Link 
                        key={p.id}
                        to={`/projects/${p.id}`}
                        className="block group"
                      >
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded overflow-hidden mr-4 flex-shrink-0">
                            <img 
                              src={p.imageUrl} 
                              alt={p.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {p.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {p.category}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;