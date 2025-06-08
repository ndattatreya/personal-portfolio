import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import SkillsOverview from '../components/home/SkillsOverview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Dattatreya | Frontend Developer';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <SkillsOverview />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
};

export default HomePage;