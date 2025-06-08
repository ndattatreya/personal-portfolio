import React, { useEffect } from 'react';
import { experiences, education, skills, personalInfo } from '../data/sampleData';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { FileDown, Briefcase, GraduationCap, Award } from 'lucide-react';

const ResumePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Resume | John Doe Portfolio';
    window.scrollTo(0, 0);
  }, []);

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const handleDownloadCV = () => {
    // In a real implementation, this would trigger a download of a PDF file
    alert('In a real implementation, this would download the CV as a PDF file.');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <SectionTitle title="My Resume" className="mb-0" />
          <Button 
            onClick={handleDownloadCV}
            icon={<FileDown size={18} />}
            variant="primary"
          >
            Download CV
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
                <div className="flex items-center mb-6">
                  <Briefcase size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Work Experience
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {experiences.map((experience, index) => (
                    <div 
                      key={index} 
                      className={`border-l-4 border-blue-600 dark:border-blue-500 pl-6 ${
                        index < experiences.length - 1 ? 'pb-8' : ''
                      }`}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.position}
                      </h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-3">
                        <span className="font-medium">{experience.company}</span>
                        <span className="mx-2">•</span>
                        <span>{experience.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div 
                      key={index} 
                      className={`border-l-4 border-blue-600 dark:border-blue-500 pl-6 ${
                        index < education.length - 1 ? 'pb-8' : ''
                      }`}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-3">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-1">
            <AnimatedSection delay={300}>
              <div className="sticky top-24 space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Personal Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                        Name
                      </h3>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {personalInfo.name}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                        Location
                      </h3>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {personalInfo.location}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium mb-1">
                        Email
                      </h3>
                      <p className="text-gray-900 dark:text-white font-medium">
                        <a 
                          href="mailto:dattatreya.nammina1@gmail.com" 
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                          dattatreya.nammina1@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <div className="flex items-center mb-6">
                    <Award size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Skills
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                      <div key={category}>
                        <h3 className="capitalize text-lg font-medium text-gray-900 dark:text-white mb-3">
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {categorySkills.map((skill) => (
                            <span 
                              key={skill.name}
                              className="text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Languages
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Telugu</span>
                        <span>Native</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">English</span>
                        <span>Fluent</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Hindi</span>
                        <span>Intermediate</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;