import React from 'react';
import { Mail } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
            Have a project in mind? I'm available for freelance work and full-time positions.
            Let's create something amazing together.
          </p>
          <Button 
            to="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
            icon={<Mail size={20} />}
          >
            Get In Touch
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactCTA;