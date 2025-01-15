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