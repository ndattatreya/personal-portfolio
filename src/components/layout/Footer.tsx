import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/sampleData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'Github':
        return <Github size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Twitter':
        return <Twitter size={20} />;
      case 'Instagram':
        return <Instagram size={20} />;
      default:
        return <Mail size={20} />;
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <span className="text-blue-600 dark:text-blue-400">{personalInfo.name.split(' ')[0]}</span>
              <span>{personalInfo.name.split(' ')[1]}</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              {personalInfo.bio}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label={social.platform}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</Link></li>
              <li><Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</Link></li>
              <li><Link to="/skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</Link></li>
              <li><Link to="/resume" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Resume</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-300 mb-2">{personalInfo.location}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <a 
                  href={`mailto:dattatreya.nammina1@gmail.com`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  dattatreya.nammina1@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;