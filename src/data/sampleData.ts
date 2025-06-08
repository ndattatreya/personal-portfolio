import { Project, Skill, Experience, Education, SocialLink, Testimonial, ContactInfo } from '../types';
import { Github, Linkedin, X, Instagram, Mail, Phone } from 'lucide-react';

export const personalInfo = {
  name: "Nammina Dattatreya",
  title: "Frontend Developer",
  bio: "Passionate frontend developer with Internship experience of building modern web applications. I specialize in React, TypeScript, and creating beautiful user interfaces.",
  tagline: "Building digital experiences that matter",
  avatarUrl: "https://res.cloudinary.com/ds48qgepn/image/upload/v1749359928/WhatsApp_Image_2025-02-07_at_09.34.58_bd06d7c5_swqold.jpg",
  location: "Anakapalli"
};

export const contactInfo: ContactInfo = {
  email: "dattatreya.nammin1@gmail.com",
  phone: "9391655168",
  address: "Anakapalli"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/ndattatreya",
    icon: "Github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/ndattatreya",
    icon: "Linkedin"
  },
  {
    platform: "X",
    url: "https://x.com/Dattatr19332823",
    icon: "X"
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/dattatreyasatwik/",
    icon: "Instagram"
  }
];

export const skills: Skill[] = [
  { name: "HTML5", level: 95, category: 'frontend' },
  { name: "CSS3", level: 90, category: 'frontend' },
  { name: "JavaScript", level: 92, category: 'frontend' },
  { name: "TypeScript", level: 88, category: 'frontend' },
  { name: "React", level: 90, category: 'frontend' },
  { name: "Tailwind CSS", level: 85, category: 'frontend' },
  { name: "Node.js", level: 80, category: 'backend' },
  { name: "Express", level: 78, category: 'backend' },
  { name: "MongoDB", level: 75, category: 'backend' },
  { name: "UI/UX Design", level: 80, category: 'design' },
  { name: "Figma", level: 85, category: 'design' },
  { name: "Git", level: 88, category: 'other' },
  { name: "Agile/Scrum", level: 85, category: 'other' },
  { name: "Testing", level: 78, category: 'other' }
];

export const experiences: Experience[] = [
  {
    company: "Agumentik Group Of Companies.",
    position: "Frontend Developer Intern",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Contributed to the development and optimization of a Human Resources Management System, enhancing overall responsiveness and usability.",
      "Collaborated with designers of the interface and user experience to improve the user experience and ensure consistency across devices.",
      "Identified and resolved front-end performance bottlenecks, achieving a 30% reduction in page load times and improving application speed"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  },
];

export const education: Education[] = [
  {
    institution: "SRM University AP",
    degree: "BTech - CSE",
    period: "2022 - 2026",
    description: "Focused on web technologies and user interface design. Graduated with honors."
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermedite",
    period: "2020 - 2022",
    description: "MPC."
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "LuxeStream - OTT Application",
    description: "Developed a user-friendly interface that simplifies content discovery and enhances user engagement.",
    category: "Website",
    technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    projectUrl: "https://luxestream1.vercel.app/",
    githubUrl: "https://github.com/ndattatreya/luxestream1",
    featured: true,
    date: "Mar 2025 - Apr 2025"
  },
  {
    id: "2",
    title: "AI-Assisted Diet Planner",
    description: "Designed and built an AI-driven platform to assist users with personalized dietary and health-related queries.",
    category: "Website",
    technologies: ["React", "Node.js", "MongoDB", "Gemini"],
    imageUrl: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    projectUrl: "https://ndattatreya-diet-planner.vercel.app/",
    githubUrl: "https://github.com/ndattatreya/Diet-Planner",
    featured: true,
    date: "Aug 2024 - Sep 2024"
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Murali Karthik",
    position: "Founder",
    company: "CreaonMarketing",
    text: "Dattatreya is one of an excellent communicator whom I met. He understands things very well without explanation. His skills with social media have developed to a professional level.",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQGVKU0AuCSakA/profile-displayphoto-shrink_100_100/B56ZZEtZjuGUAc-/0/1744909474614?e=1755129600&v=beta&t=fFO_QHe66HPfwY3JGiXsDUEqUe186SU_3UIaHc58SCg"
  }
];