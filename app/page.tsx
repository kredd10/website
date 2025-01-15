import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
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
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Master of Science in Computer Science</strong> (Aug 2023 – May 2025) <br />
            Illinois Institute of Technology, Chicago, IL <br />
            Coursework: Trustworthy Machine Learning, Marketing Strategy, Advanced Database Organization, Computer Networks.
          </li>
          <li>
            <strong>Bachelor of Engineering with Honors, Computer Science and Engineering</strong> (Aug 2019 - Jun 2023) <br />
            B.N.M. Institute of Technology, Bangalore, Karnataka, India | CGPA: 8.53 / 10.0 | First Class with Distinction <br />
            Coursework: Machine Learning, Deep Learning, Data Science, Human Computer Interaction, Software Engineering.
          </li>
        </ul>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Genisys Venture Analyst</strong> (Dec 2024 – Present) <br />
            Kaplan Institute, Illinois Tech, Chicago <br />
            Conducted deep market and technology analyses within digital transformation trends, particularly in AI and computing,
            delivering strategic insights to guide investment recommendations for TechForward funding. Synthesized technology
            readiness and commercialization strategies into Investment Summary Reports, highlighting key opportunities and risks
            for executive decision-making.
          </li>
          <li>
            <strong>Founder, CEO</strong> (Dec 2023 – Sep 2024) <br />
            H2.0 Resilience, Illinois Tech, Chicago <br />
            Sourced and assessed market opportunities for an explainable AI flood risk tool, identifying strategic spaces in flood
            mitigation technologies and generating interest from 5+ government agencies. Reduced flood evaluation time by 90% using
            Transformer-based analytics to enhance data visualization and stakeholder insights.
          </li>
          <li>
            <strong>Machine Learning Research Intern</strong> (Jan 2023 – Jul 2023) <br />
            VIGA Entertainment, Bangalore, India <br />
            Led the team on "Face Solver" research project using Google MediaPipe for real-time 3D facial animation in Unreal Engine.
            Designed an intuitive UX interface to facilitate seamless control of the animation system, reducing troubleshooting
            incidents by consolidating functions into one easy-to-navigate platform.
          </li>
        </ul>
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
