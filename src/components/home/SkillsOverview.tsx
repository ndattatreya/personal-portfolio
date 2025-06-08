import React, { useState } from 'react';
import { skills } from '../../data/sampleData';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';

const SkillsOverview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' },
  ];
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Skills" 
          subtitle="I've worked with a variety of technologies across the development stack."
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
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
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-medium mb-3">{skill.name}</h3>
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
        
        <div className="mt-12 text-center">
          <Button to="/skills">
            View All Skills
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;