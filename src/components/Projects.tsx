import { useState } from 'react';
import type { Project } from '../types';

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-gray/50 to-dark"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <h2 className="text-4xl lg:text-5xl font-bold font-mono">
                <span className="text-primary">$</span> ls <span className="gradient-text">projects/</span>
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <div
              key={index}
              className="project-card terminal-window terminal-dots rounded-2xl p-6 pt-12 card-hover group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg blur opacity-50 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : ''}`}></div>
                    <div className="relative p-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/30">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[60px]">
                <span className="text-primary font-mono">{'>'}</span> {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-tag px-2 py-1 text-xs bg-primary/10 border border-primary/30 rounded text-primary/80 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-primary/20">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group/link"
                  >
                    <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-mono">View Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors text-sm group/link"
                  >
                    <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="font-mono">Live Demo</span>
                  </a>
                )}
              </div>

              {/* Animated corner accent on hover */}
              <div className={`absolute top-0 right-0 w-16 h-16 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-effect p-8 rounded-2xl">
            <p className="text-gray-400 mb-4 font-mono">
              <span className="text-primary">$</span> For more projects, check out my GitHub
            </p>
            <a
              href="https://github.com/Gokcann"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button inline-flex items-center gap-2 rounded-lg font-mono text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
