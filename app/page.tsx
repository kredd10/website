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
        Hi, I'm Manish K Reddy!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I translate cutting-edge technology into real-world impact as a <strong>Google Summer of Code contributor, venture analyst, and deep tech entrepreneur</strong>.
        </p>
        <p>
          With a strong foundation in <strong>computer science</strong> and hands-on experience across <strong>AI/ML, cloud-native deployments, and startup strategy</strong>, I've helped build and evaluate transformative technologies. My work spans critical areas like <strong>flood resilience, cybersecurity, and productivity tooling</strong>. I thrive at the intersection of engineering and venture—where research meets execution.
        </p>
        <p>
          Outside of my professional pursuits, I'm an avid runner, community event curator, and dedicated builder.
        </p>
        <p>
          Let’s connect if you’re building something bold or want to discuss deep tech, AI, or venture.
        </p>
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
