import React from "react";
import type { Metadata } from "next";
import { projects, publications } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      
      {/* Projects Section */}
      <div className="space-y-6 mb-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      
      {/* Publications Section */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-medium tracking-tight">Publications</h2>
        <div className="prose prose-neutral dark:prose-invert">
          {publications.map((pub, index) => (
            <p key={index} className="text-sm mb-4">
              {pub.authors} ({pub.year}). "{pub.title}". In <em>{pub.conference}</em>, {pub.location}. Available: <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.publisher}</a>.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
