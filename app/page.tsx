import Image from "next/image";
import { useState } from "react"; // Import useState for collapsible functionality
import { socialLinks } from "./config";

export default function Page() {
  // State for managing collapsible sections
  const [showEducation, setShowEducation] = useState(false);
  const [showWorkExperience, setShowWorkExperience] = useState(false);

  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Manish K Reddy"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I’m Manish K Reddy!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’m a Venture Analyst and entrepreneur with a passion for identifying
          transformative opportunities and building impactful solutions.
        </p>
        <p>
          My journey combines a strong foundation in computer science with hands-on
          experience in startups, deep tech commercialization, and strategic market
          analysis. I specialize in evaluating emerging technologies, supporting
          innovative startups, and driving growth through analytical rigor and
          customer-focused strategies.
        </p>
        <p>
          When I’m not immersed in my work, I enjoy running, organizing events,
          and exploring ideas that bring people together for meaningful causes.
        </p>
        <p>
          Let’s connect and explore how we can collaborate on projects that
          shape the future.
        </p>

        {/* Collapsible Education Section */}
        <h2>
          <button
            className="text-blue-500 underline"
            onClick={() => setShowEducation(!showEducation)}
          >
            {showEducation ? "Hide Education" : "Show Education"}
          </button>
        </h2>
        {showEducation && (
          <ul>
            <li>
              <strong>Master of Science in Computer Science</strong> (Aug 2023 – May 2025) <br />
              Illinois Institute of Technology, Chicago, IL <br />
              Focus: Trustworthy Machine Learning, Marketing Strategy, Advanced Databases.
            </li>
            <li>
              <strong>Bachelor of Engineering, Computer Science</strong> (Aug 2019 - Jun 2023) <br />
              B.N.M. Institute of Technology, Bangalore, India <br />
              Focus: Machine Learning, Data Science, Software Engineering.
            </li>
          </ul>
        )}

        {/* Collapsible Work Experience Section */}
        <h2>
          <button
            className="text-blue-500 underline"
            onClick={() => setShowWorkExperience(!showWorkExperience)}
          >
            {showWorkExperience ? "Hide Work Experience" : "Show Work Experience"}
          </button>
        </h2>
        {showWorkExperience && (
          <ul>
            <li>
              <strong>Genisys Venture Analyst</strong> (Dec 2024 – Present) <br />
              Kaplan Institute, Chicago, IL <br />
              Conducted market analysis and created investment strategies for AI and computing.
            </li>
            <li>
              <strong>Founder & CEO</strong> (Dec 2023 – Sep 2024) <br />
              H2.0 Resilience, Chicago, IL <br />
              Developed an explainable AI tool for flood risk mitigation, reducing evaluation time by 90%.
            </li>
            <li>
              <strong>Machine Learning Research Intern</strong> (Jan 2023 – Jul 2023) <br />
              VIGA Entertainment, Bangalore, India <br />
              Led the "Face Solver" project, creating a real-time 3D animation system using Google MediaPipe.
            </li>
          </ul>
        )}

        <p>
          Built and maintained by{" "}
          <a href={socialLinks.linkedin} target="_blank">
            Manish K Reddy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
