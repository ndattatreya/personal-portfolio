import React, { useEffect } from 'react';
import { personalInfo, experiences, education, socialLinks } from '../data/sampleData';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Calendar, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About | Dattatreya"s Portfolio';
    window.scrollTo(0, 0);
  }, []);

  const renderSocialIcons = () => {
    return (
      <div className="flex space-x-4 mt-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label={social.platform}
          >
            {/* Render icon based on platform name */}
            <span className="sr-only">{social.platform}</span>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <AnimatedSection className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={personalInfo.avatarUrl} 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {personalInfo.name}
                  </h2>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {personalInfo.title}
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                    <MapPin size={18} className="mr-2" />
                    <span>{personalInfo.location}</span>
                  </div>
                  {renderSocialIcons()}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-2" delay={200}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold mb-4">Biography</h3>
              <p className="mb-6">
                {personalInfo.bio}
              </p>
              <p className="mb-6">
                I am a passionate frontend developer with expertise in creating responsive and user-friendly web applications. 
                My journey in web development began over 5 years ago, and since then, I've been devoted to crafting 
                digital experiences that combine aesthetic appeal with functionality.
              </p>
              <p className="mb-6">
                Throughout my career, I've worked with various clients and companies, helping them achieve their digital goals through 
                innovative web solutions. My approach involves understanding client needs, keeping up with the latest industry trends, 
                and implementing best practices to deliver exceptional results.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my 
                knowledge through blog posts and community forums. I believe in continuous learning and constantly strive to enhance 
                my skills and stay ahead in this rapidly evolving field.
              </p>
              
              <h3 className="text-2xl font-bold mt-12 mb-6">Work Experience</h3>
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div key={index} className="border-l-4 border-blue-600 dark:border-blue-500 pl-6 relative">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                      <Briefcase size={14} className="text-white" />
                    </div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.position} at {experience.company}
                      </h4>
                      <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        <Calendar size={14} className="mr-1" />
                        {experience.period}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 mb-3">
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
              
              <h3 className="text-2xl font-bold mt-12 mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-600 dark:border-blue-500 pl-6 relative">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                      <GraduationCap size={14} className="text-white" />
                    </div>
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;