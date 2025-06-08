import React, { useState, useEffect } from 'react';
import { skills } from '../data/sampleData';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import ProgressBar from '../components/ui/ProgressBar';

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  useEffect(() => {
    document.title = 'Skills | Dattatreya Portfolio';
    window.scrollTo(0, 0);
  }, []);
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Skills" 
          subtitle="A comprehensive list of my technical skills and proficiency levels."
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <AnimatedSection 
              key={skill.name} 
              delay={index * 100}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
              </div>
              <ProgressBar 
                value={skill.level} 
                label={skill.name} 
                showLabel={false}
                height="h-3"
                animated
              />
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={300} className="mt-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              My Approach to Learning
            </h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                In the ever-evolving landscape of web development, I believe in continuous learning and adaptation.
                My approach to acquiring and improving skills involves:
              </p>
              <ul>
                <li>Hands-on project-based learning to apply theoretical knowledge</li>
                <li>Regular exploration of new technologies and frameworks</li>
                <li>Participation in developer communities and knowledge sharing</li>
                <li>Setting structured learning goals and tracking progress</li>
                <li>Challenging myself with increasingly complex problems</li>
              </ul>
              <p>
                This methodology has enabled me to rapidly adapt to new technologies and maintain a diverse skill set
                that spans frontend development, backend systems, and design principles. I'm committed to continued
                growth and look forward to expanding my expertise into emerging areas like AI, AR/VR, and advanced
                web applications.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SkillsPage;