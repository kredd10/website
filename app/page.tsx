'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaGoogle, FaChartLine, FaLaptopCode, FaWater, FaVrCardboard, FaBook, FaUniversity, FaGraduationCap } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "./config";
import { projects } from "./projects/project-data";

// Component for animated sections with scroll reveal
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay for staggered animations
        setTimeout(() => {
          setIsVisible(entry.isIntersecting);
        }, delay);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "-50px", // Trigger slightly before the element is in view
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <section 
      ref={sectionRef}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </section>
  );
};

// Timeline Item Component with optional logo
const TimelineItem = ({ date, title, organization, description, icon: Icon, isLeft = true, isCurrent = false, logo = null }) => {
  return (
    <div className={`flex flex-col md:flex-row w-full mb-12 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
      {/* Left content for desktop */}
      <div className={`md:w-5/12 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
        <div className="mb-2">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${isCurrent ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'}`}>
            {date}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{organization}</p>
        {Array.isArray(description) ? (
          <ul className={`list-disc ${isLeft ? 'md:ml-4' : 'md:mr-4'} ml-4 text-gray-700 dark:text-gray-300 text-sm space-y-1`}>
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
        )}
        
        {/* Logo for mobile view */}
        {logo && (
          <div className="block md:hidden mt-4">
            {logo}
          </div>
        )}
      </div>
      
      {/* Center line with icon - hidden on mobile, visible on md and up */}
      <div className="hidden md:flex w-2/12 justify-center relative">
        <div className="h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
        <div className="absolute w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      {/* Icon for mobile view */}
      <div className="flex md:hidden items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      {/* Right side - can contain logo for desktop view */}
      <div className="hidden md:block md:w-5/12">
        {logo && (isLeft || !isLeft) && (
          <div className="flex items-center justify-center h-full">
            {logo}
          </div>
        )}
      </div>
    </div>
  );
};

// Social Icon Component
const SocialIcon = ({ href, icon: Icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center"
      aria-label={label}
    >
      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
        <Icon className="w-6 h-6" />
      </div>
      <span className="mt-2 text-xs text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
        {label}
      </span>
    </a>
  );
};

// Project Carousel Component with rotating photo effect and liquid glass
const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = projects.length - 1;
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };
  
  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <div className="relative w-full my-12">
      <div className="glassmorphism rounded-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm z-0 rounded-xl"></div>
        
        <div className="relative z-10">
          {/* Project Image */}
          <div className="w-full h-48 md:h-64 mb-6 relative overflow-hidden rounded-lg">
            <div className={`w-full h-full transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg relative">
                <Image
                  src={`/photos/photo${(currentIndex % 6) + 1}.jpg`}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-2xl font-bold">{projects[currentIndex].title}</h3>
                  <span className="text-sm font-medium px-3 py-1 bg-blue-500/80 rounded-full">
                    {projects[currentIndex].year}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            {projects[currentIndex].description}
          </p>
          
          <div className="flex justify-between items-center">
            <a 
              href={projects[currentIndex].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              View Project <FaArrowRight className="ml-2" />
            </a>
            
            <div className="flex space-x-3">
              <button 
                onClick={prevProject}
                className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                disabled={isTransitioning}
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={nextProject}
                className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                disabled={isTransitioning}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {projects.map((_, index) => (
              <button 
                key={index} 
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to project ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const experiences = [
    {
      date: "2025",
      title: "Google Summer of Code Contributor",
      organization: "OSPO, UC Santa Cruz | Chicago, IL",
      description: [
        "Selected within the top 8% of applicants to develop a containerized Agentic AI platform for the NRP cluster, serving 70+ institutions across 3 continents. Delivered open-source code, Docker images, and comprehensive user documentation.",
        "Integrated GPU-backed Large Language Models (LLMs) with operational data to power a GenAI narrative and root cause analysis in the Seam portal, significantly accelerating troubleshooting processes."
      ],
      isCurrent: true,
      icon: FaGoogle,
      logo: (
        <a 
          href="https://summerofcode.withgoogle.com/programs/2025/projects/fPp1JXbl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105 duration-300"
        >
          <div className="relative w-80 h-40 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/photos/GSoC_logo.jpg"
              alt="Google Summer of Code"
              fill
              className="object-contain"
            />
          </div>
        </a>
      )
    },
    {
      date: "2024 - 2025",
      title: "Genisys Venture Analyst",
      organization: "Kaplan Institute | Chicago, IL",
      description: [
        "Conducted due diligence on 2 deep tech projects (AI and sustainability), providing strategic insights that guided a $6 million TechForward Investment through data-driven decision-making and cross-functional collaboration.",
        "Collaborated with multidisciplinary teams to evaluate financial models, market potential, and IP strategies, ultimately securing $350K in high-impact funding by applying robust stakeholder alignment frameworks and risk assessment models."
      ],
      icon: FaChartLine,
      logo: (
        <a 
          href="https://www.iit.edu/kaplan-institute" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105 duration-300"
        >
          <div className="relative w-80 h-40 overflow-hidden rounded-lg shadow-md">
            <Image
              src="/photos/KI-logo.jpg"
              alt="Kaplan Institute"
              fill
              className="object-contain"
            />
          </div>
        </a>
      )
    },
    {
      date: "2023 - 2024",
      title: "Founder, CEO",
      organization: "H2.0 Resilience | Chicago, IL",
      description: [
        "Identified and assessed 3 market opportunities for an explainable AI flood risk tool, developing a novel flood mitigation solution that generated interest from 5+ government agencies. Presented compelling insights to executive leadership.",
        "Reduced flood evaluation time by 90% by implementing Transformer decoders, which enhanced data visualization and stakeholder insights to support informed risk assessment strategies."
      ],
      icon: FaWater
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <AnimatedSection className="flex flex-col-reverse md:flex-row items-center gap-8" delay={0}>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Hi, I'm Manish K Reddy
          </h1>
          
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I translate cutting-edge technology into real-world impact as a <span className="font-semibold">Google Summer of Code contributor, venture analyst, and deep tech entrepreneur</span>.
          </p>
          
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            With a strong foundation in <span className="font-semibold">computer science</span> and hands-on experience across <span className="font-semibold">AI/ML, cloud-native deployments, and startup strategy</span>, I've helped build and evaluate transformative technologies.
          </p>
          
          <div className="flex gap-4 mb-10">
            <Link 
              href="/resume" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View Full Resume
            </Link>
            <Link 
              href="/academics" 
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors"
            >
              Academic Background
            </Link>
          </div>
          
          {/* Social Links - Larger and cleaner */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">Connect with me</h3>
            <div className="flex justify-between max-w-md">
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label="Twitter"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                  <FaTwitter className="w-7 h-7" />
                </div>
              </a>
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                  <FaGithub className="w-7 h-7" />
                </div>
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                  <FaLinkedin className="w-7 h-7" />
                </div>
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                  <FaInstagram className="w-7 h-7" />
                </div>
              </a>
              <a 
                href={socialLinks.email} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                aria-label="Email"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                  <FaEnvelope className="w-7 h-7" />
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/profile.png"
                alt="Manish K Reddy"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </a>
        </div>
      </AnimatedSection>
      
      {/* Experience Section */}
      <AnimatedSection delay={200}>
        <h2 className="text-3xl font-bold mb-12 text-center">Recent Experience</h2>
        
        <div className="w-full">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              date={exp.date}
              title={exp.title}
              organization={exp.organization}
              description={exp.description}
              isLeft={index % 2 === 0}
              isCurrent={exp.isCurrent}
              icon={exp.icon}
              logo={exp.logo}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/resume" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            View Complete Resume <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </AnimatedSection>
      
      {/* Featured Projects Section */}
      <AnimatedSection delay={400}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link 
            href="/projects" 
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            View All <FaArrowRight className="ml-2" />
          </Link>
        </div>
        
        <ProjectCarousel />
      </AnimatedSection>
      
      {/* Add custom styles for glassmorphism with liquid effect */}
      <style jsx global>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .glassmorphism:hover {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
          transform: translateY(-5px);
        }
        
        .glassmorphism::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: liquidShine 8s linear infinite;
          z-index: 1;
          pointer-events: none;
        }
        
        @keyframes liquidShine {
          0% {
            transform: rotate(30deg) translate(-30%, -30%);
          }
          100% {
            transform: rotate(30deg) translate(30%, 30%);
          }
        }
        
        .dark .glassmorphism {
          background: rgba(30, 41, 59, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .dark .glassmorphism::before {
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        
        @media (max-width: 768px) {
          .glassmorphism:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
} 
