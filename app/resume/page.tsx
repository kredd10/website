'use client';

import React, { useEffect, useState } from 'react';
import { 
  FaGoogle, 
  FaChartLine, 
  FaLaptopCode, 
  FaWater, 
  FaVrCardboard, 
  FaBook, 
  FaUniversity, 
  FaGraduationCap 
} from 'react-icons/fa';

export default function ResumePage() {
  // Use state to handle client-side rendering
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Return null or a loading state until client-side rendering is ready
  if (!isClient) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-full">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>
      <Timeline />
    </div>
  );
}

const TimelineItem = ({ 
  date, 
  title, 
  organization, 
  description, 
  isLeft = true, 
  isCurrent = false,
  icon: Icon
}) => {
  return (
    <div className={`flex w-full flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}>
      {/* Content */}
      <div className={`w-full md:w-5/12 px-2 md:px-4 ${isLeft ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-0`}>
        <div className={`p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 ${isLeft ? 'md:mr-4' : 'md:ml-4'}`}>
          <div className="flex items-center mb-2 gap-2 justify-between">
            <span className={`text-sm font-normal text-gray-500 dark:text-gray-400 ${isLeft ? 'md:order-last' : 'md:order-first'}`}>
              {date}
            </span>
            {isCurrent && (
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Current
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          {organization && <p className="text-gray-600 dark:text-gray-300 italic mb-2">{organization}</p>}
          <div className="text-gray-700 dark:text-gray-400">
            {Array.isArray(description) ? (
              <ul className={`list-disc ${isLeft ? 'md:pl-0 md:pr-5 md:text-right' : 'pl-5'} space-y-1`}>
                {description.map((item, index) => (
                  <li key={index} className={isLeft ? 'md:list-inside' : ''}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{description}</p>
            )}
          </div>
        </div>
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
      
      {/* Empty space for alternating layout - hidden on mobile */}
      <div className="hidden md:block md:w-5/12"></div>
    </div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      date: "May 2025 - Present",
      title: "Google Summer of Code Contributor",
      organization: "OSPO, UC Santa Cruz",
      description: [
        "Developed containerized Agentic AI for the NRP cluster (70+ institutions across 3 continents) that ingests Prometheus metrics and logs, and ships open-source code with deployable containers and tailored documentation.",
        "Integrated GPU backed, finetuned LLMs on operational data to power GenAI narratives and root cause analyses in the Seam portal, accelerating proactive monitoring and troubleshooting."
      ],
      isCurrent: true,
      icon: FaGoogle
    },
    {
      date: "Mar 2025 - Apr 2025",
      title: "Project: Kaplan Finance Storytelling (KapFiS)",
      description: [
        "Created an interactive AI Financial Storytelling coach using LangGraph and Gemini API to guide startups in structuring compelling financial narratives, leveraging database integration, few-shot prompting, grounding, agentic behavior and strategic frameworks."
      ],
      icon: FaChartLine
    },
    {
      date: "Dec 2024 - Mar 2025",
      title: "Genisys Venture Analyst",
      organization: "Kaplan Institute, Illinois Tech, Chicago",
      description: [
        "Conducted due diligence on 2 deep tech projects based on AI and sustainability, delivering strategic insights to guide a $6 million TechForward Investment enabling data-driven decision making, and collaboration with domain experts.",
        "Collaborated with multidisciplinary teams to evaluate financial models, market potential, and IP strategies, securing $330K high impact funding allocations by applying stakeholder alignment frameworks and risk assessment models."
      ],
      icon: FaLaptopCode
    },
    {
      date: "Aug 2024 - Dec 2024",
      title: "Project: Adversarial Attack on Local LLMs (LARF)",
      description: [
        "Developed the Local Adversarial Refinement Framework (LARF) to identify vulnerabilities in 16 local LLMs, including Lllama2, SmoLLM and Deepseek-V2, using models like GPT-4 and Llama-2 for attack and evaluation, improving safety in Generative AI."
      ],
      icon: FaLaptopCode
    },
    {
      date: "Dec 2023 - Sep 2024",
      title: "Founder, CEO",
      organization: "H2.0 Resilience, Illinois Tech, Chicago",
      description: [
        "Sourced and assessed 3 market opportunities for an explainable AI flood risk tool, creating flood mitigation technologies and generating interest from 5+ government agencies; presented insights to executive leadership.",
        "Reduced flood evaluation time by 90% using Transformer decoders to enhance data visualization and stakeholder insights, supporting informed decision making and risk assessment strategies."
      ],
      icon: FaWater
    },
    {
      date: "Jan 2023 - Jul 2023",
      title: "Machine Learning Research Intern",
      organization: "VIGA Entertainment, Bangalore, India",
      description: [
        "Led the team on the 'Face Solver' R&D initiative with Mefamo in Unreal Engine's LiveLink, capturing subtle expressions with high accuracy and virtually no lag by implementing low latency data pipelines and neural architectures.",
        "Engineered an intuitive UX interface to facilitate seamless control of the animation system; refined usability and reduced troubleshooting incidents by 30% through consolidated functionality and iterative user testing."
      ],
      icon: FaVrCardboard
    },
    {
      date: "Nov 17, 2023",
      title: "Publication: Literature Survey on Tracking Template Face Mesh Using Stereo Video",
      description: [
        "Researched and evaluated 2D and 3D facial motion capture techniques, identifying limitations and proposing solutions to enable real-time, accessible applications in public settings."
      ],
      icon: FaBook
    },
    {
      date: "Aug 2023 - May 2025",
      title: "Master of Science in Computer Science",
      organization: "Illinois Institute of Technology, Chicago, IL",
      description: "Coursework: Trustworthy Machine Learning, Marketing Strategy, Advanced Database Organization, Computer Networks",
      icon: FaUniversity
    },
    {
      date: "Aug 2019 - Jun 2023",
      title: "Bachelor of Engineering with Honors, Computer Science and Engineering",
      organization: "B.N.M. Institute of Technology, Bangalore, Karnataka, India",
      description: "First Class with Distinction. Coursework: Machine Learning, Deep Learning, Data Science, Human Computer Interaction, Software Engineering",
      icon: FaGraduationCap
    }
  ];

  return (
    <section className="relative w-full">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
      
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
          />
        ))}
      </div>

      {/* Skills Section */}
      <div className="mt-16 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <div className="text-gray-700 dark:text-gray-400">
          <p className="mb-2"><span className="font-semibold">Programming Languages:</span> Python | C/C++ | R | Weka | MATLAB | PyTorch | SQL | MongoDB | Java</p>
          <p><span className="font-semibold">Technical Proficiencies:</span> Kubernetes | Google Cloud Platform | Azure | GitLab CI/CD | AWS | Excel</p>
        </div>
      </div>

      {/* Honors and Achievements Section */}
      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Honors and Achievements</h3>
        <ul className="list-disc pl-8 space-y-2 text-gray-700 dark:text-gray-400">
          <li>Selected as a Genisys Innovation Fellow, translating research into investment opportunities as a Venture Analyst.</li>
          <li>Won Innovation Day for aligning Li-Air battery, with the NSF funded ART: IL-TechForward initiative.</li>
          <li>Recognized as "Entrepreneur of Spring 2024" & 2nd Runner-Up, Grainger Innovation Prize for Computing for Social Good.</li>
        </ul>
      </div>
    </section>
  );
};



