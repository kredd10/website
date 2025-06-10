import Link from "next/link";
import { FaExternalLinkAlt, FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function AcademicsPage() {
  const degrees = [
    {
      degree: "Master of Science, Computer Science",
      institution: "Illinois Institute of Technology",
      period: "August 2023 - May 2025",
      activities: "Pi Kappa Phi, Product Management Club, Startup Accelerator, Grainger Computing Innovation Prize",
      skills: "Content Management Systems (CMS), Computer Science, Technical Proficiency, Data Analysis, Analytical Skills, Product Management, Microsoft Excel, Investments, Presentations, Machine Learning, Corporate Venture Capital, Web Conferencing, Graduate Students, Microsoft PowerPoint",
      grade: null
    },
    {
      degree: "Bachelor's degree, Computer Science",
      institution: "BNM Institute Of Technology",
      period: "2019 - 2023",
      activities: "Quiz Club, Basketball, Siggraph BNMIT, IEEE Execom, Tatva College Fest",
      skills: "Content Management Systems (CMS), Computer Science, Technical Proficiency, Data Analysis, Analytical Skills, Microsoft Excel, Event Management, Presentations, Academic Achievement, Quizmaker, Web Conferencing, Graphic Design, Microsoft PowerPoint",
      grade: "8.6"
    },
    {
      degree: "High School Diploma, CBSE",
      institution: "AECS Magnolia Maaruti Public School - India",
      period: "2017 - 2019",
      activities: "School Quiz team, Basketball",
      skills: null,
      grade: "12"
    },
    {
      degree: "High School Diploma, CBSE",
      institution: "Presidency School",
      period: "2007 - 2017",
      activities: "School Quiz Club Team, Football, Basketball",
      skills: null,
      grade: "10"
    }
  ];

  const certifications = [
    {
      title: "Intermediate Technical Interview Prep Course",
      issuer: "CodePath",
      date: "May 2025",
      skills: "Data Structures, Technical Proficiency, Computer Science",
      description: null
    },
    {
      title: "5-Day Gen AI Intensive",
      issuer: "Kaggle (Google x Kaggle Generative AI Intensive)",
      date: "April 2025",
      skills: "Artificial Intelligence (AI), Kaggle, GenAI, Foundational Models & Prompt Engineering, Generative AI Agents, Domain-Specific LLMs, MLOps for Generative AI",
      description: "Earned a 5-day professional certificate covering foundational and domain-specific large language models, prompt engineering, embeddings & vector databases, generative AI agent design, and MLOps for production—culminating in a hands-on capstone project. Developed expertise in Transformer architectures, inference acceleration, agent frameworks, Vertex AI, and best practices for scaling generative systems."
    },
    {
      title: "Introduction To Industry 4.0 And Industrial Internet Of Things",
      issuer: "NPTEL",
      date: "April 2023",
      skills: "Internet of Things (IoT), Academic Achievement, Industry 4.0",
      description: null
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      date: "April 2023",
      skills: "Online Privacy",
      description: null
    },
    {
      title: "Reinforcement Learning",
      issuer: "NPTEL",
      date: "April 2023",
      skills: "Reinforcement Learning",
      description: null
    },
    {
      title: "Understanding Incubation and Entrepreneurship",
      issuer: "NPTEL",
      date: "April 2023",
      skills: "Entrepreneurship, Presentations, Incubation",
      description: null
    },
    {
      title: "Cloud Computing and Distributed Systems",
      issuer: "NPTEL",
      date: "March 2023",
      skills: "Cloud Computing, Distributed Systems",
      description: null
    },
    {
      title: "User-centric Computing for Human-Computer Interaction",
      issuer: "NPTEL",
      date: "March 2023",
      skills: "Human Computer Interaction, Presentations",
      description: null
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Academic Background</h1>
      
      <div className="space-y-10">
        <section>
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-2xl mr-3 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold">Education</h2>
            <Link 
              href="https://www.linkedin.com/in/manishkreddy/details/education/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              <span className="mr-1">View on LinkedIn</span>
              <FaExternalLinkAlt className="text-sm" />
            </Link>
          </div>
          
          <div className="space-y-8">
            {degrees.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{edu.period}</p>
                
                {edu.grade && (
                  <p className="mb-3">
                    <span className="font-medium">Grade:</span> {edu.grade}
                  </p>
                )}
                
                {edu.activities && (
                  <div className="mb-3">
                    <p className="font-medium mb-1">Activities and Societies:</p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.activities}</p>
                  </div>
                )}
                
                {edu.skills && (
                  <div>
                    <p className="font-medium mb-1">Skills:</p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.skills}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <div className="flex items-center mb-4">
            <FaCertificate className="text-2xl mr-3 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold">Licenses & Certifications</h2>
            <Link 
              href="https://www.linkedin.com/in/manishkreddy/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              <span className="mr-1">View on LinkedIn</span>
              <FaExternalLinkAlt className="text-sm" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-3">Issued: {cert.date}</p>
                
                {cert.description && (
                  <div className="mb-3">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{cert.description}</p>
                  </div>
                )}
                
                {cert.skills && (
                  <div>
                    <p className="font-medium text-sm mb-1">Skills:</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{cert.skills}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              View more certifications on my{" "}
              <Link 
                href="https://www.linkedin.com/in/manishkreddy/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                LinkedIn profile
              </Link>
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">Publications</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Literature Survey on Tracking Template Face Mesh Using Stereo Video</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-medium">Authors:</span> Reddy, M. K., Kavitha, J., Suhail, M. A., Acharya, A., & Raheel, M.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-medium">Conference:</span> Recent Trends in Computational Sciences: Proceedings of the Fourth Annual International Conference on Data Science, Machine Learning and Blockchain Technology (AICDMB 2023)
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-medium">Published:</span> Mysuru, India, 16–17 March 2023 (1st ed.)
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-medium">Publisher:</span> Taylor & Francis - CRC Press
            </p>
            <Link 
              href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003363781-48/literature-survey-tracking-template-face-mesh-using-stereo-video-kavitha-jayaram-ameer-suhail-aneesh-acharya-manish-reddy-mohammed-raheel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center w-fit"
            >
              <span className="mr-1">View Publication</span>
              <FaExternalLinkAlt className="text-sm" />
            </Link>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-3">Research</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Tracking Template Face Mesh Using Stereo Video</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Researched and evaluated 2D and 3D facial motion capture techniques, identifying limitations and proposing solutions to enable real-time, accessible applications in public settings.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Designed and implemented a pipeline integrating Google MediaPipe with game engine functionalities, achieving sub-2-second latency from input capture to display for real-time, AI-driven 3D facial motion capture across multiple subjects.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
