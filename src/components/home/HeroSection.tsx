import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/sampleData';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <AnimatedSection className="lg:w-1/2" delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                to="/projects" 
                size="lg" 
                icon={<ArrowRight size={20} />} 
                iconPosition="right"
              >
                View My Work
              </Button>
              <Button 
                to="/contact" 
                variant="outline" 
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:w-1/2" direction="left" delay={400}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mx-auto">
                <img 
                  src={personalInfo.avatarUrl} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg">
                <span className="font-medium">{personalInfo.location}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-scroll-down mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;