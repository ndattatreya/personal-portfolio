import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = '404 - Page Not Found';
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <AnimatedSection className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            to="/" 
            icon={<Home size={18} />}
          >
            Go Home
          </Button>
          <Button 
            onClick={() => navigate(-1)} 
            variant="outline"
            icon={<ArrowLeft size={18} />}
          >
            Go Back
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default NotFoundPage;