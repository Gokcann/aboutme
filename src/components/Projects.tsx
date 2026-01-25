import { useState, useEffect, useRef, useCallback } from 'react';
import type { Project } from '../types';

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
    setHoveredIndex(null);
  }, []);

  // Color schemes for different projects
  const colorSchemes = [
    { primary: '#00D9FF', gradient: 'from-cyan-500 to-blue-600', bg: 'bg-cyan-500' },
    { primary: '#7B2FFF', gradient: 'from-purple-500 to-indigo-600', bg: 'bg-purple-500' },
    { primary: '#FF006E', gradient: 'from-pink-500 to-rose-600', bg: 'bg-pink-500' },
    { primary: '#00FF41', gradient: 'from-green-500 to-emerald-600', bg: 'bg-green-500' },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-gray/50 to-dark"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent to-accent"></div>
              <span className="text-accent font-mono text-sm tracking-widest uppercase">Portfolio</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-accent to-accent"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Featured</span>{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto">
              A showcase of systems I've designed and built from the ground up
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const colors = colorSchemes[index % colorSchemes.length];

            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}30, transparent, ${colors.primary}30)`,
                  }}
                />

                {/* Card */}
                <div
                  className={`relative bg-gradient-to-br from-dark-gray/90 to-dark/90 rounded-2xl border-2 overflow-hidden backdrop-blur-sm transition-all duration-500 ${
                    isHovered
                      ? 'border-white/20 shadow-2xl'
                      : 'border-white/5 shadow-lg'
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? `0 25px 50px -12px ${colors.primary}30, 0 0 0 1px ${colors.primary}20`
                      : 'none',
                  }}
                >
                  {/* Spotlight effect following mouse */}
                  {isHovered && (
                    <div
                      className="absolute pointer-events-none transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${colors.primary}15, transparent 40%)`,
                        inset: 0,
                      }}
                    />
                  )}

                  {/* Top gradient bar */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${colors.gradient} transition-all duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-50'
                    }`}
                  />

                  {/* Content */}
                  <div className="p-8 relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        {/* Project icon */}
                        <div
                          className={`relative p-3 rounded-xl transition-all duration-500 ${
                            isHovered ? 'scale-110' : ''
                          }`}
                          style={{
                            background: isHovered
                              ? `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}10)`
                              : 'rgba(255,255,255,0.05)',
                            boxShadow: isHovered ? `0 0 20px ${colors.primary}30` : 'none',
                          }}
                        >
                          <svg
                            className="w-6 h-6 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: isHovered ? colors.primary : '#9CA3AF' }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                        </div>

                        <div>
                          <h3
                            className="text-xl font-bold transition-colors duration-300"
                            style={{ color: isHovered ? colors.primary : 'white' }}
                          >
                            {project.title}
                          </h3>
                          {project.isPrivate && (
                            <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 1C8.676 1 6 3.676 6 7v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4z"/>
                              </svg>
                              Private
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className={`mb-6 space-y-2 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
                        {project.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className={`flex items-start gap-2 text-xs transition-all duration-300 ${
                              isHovered ? 'translate-x-1' : ''
                            }`}
                            style={{ transitionDelay: `${hIndex * 50}ms` }}
                          >
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300"
                              style={{ backgroundColor: isHovered ? colors.primary : '#6B7280' }}
                            />
                            <span className="text-gray-400 leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all duration-300 ${
                            isHovered
                              ? 'bg-white/10 text-white border border-white/10'
                              : 'bg-white/5 text-gray-500 border border-transparent'
                          }`}
                          style={{
                            transitionDelay: `${techIndex * 30}ms`,
                            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      {project.github && !project.isPrivate ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                          style={{
                            background: isHovered ? `${colors.primary}20` : 'rgba(255,255,255,0.05)',
                            color: isHovered ? colors.primary : '#9CA3AF',
                          }}
                        >
                          <svg className="w-5 h-5 transition-transform group-hover/btn:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span>View Code</span>
                        </a>
                      ) : project.isPrivate ? (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-500 bg-white/5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 1C8.676 1 6 3.676 6 7v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4z"/>
                          </svg>
                          <span className="font-mono">Private Repository</span>
                        </div>
                      ) : null}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Animated corner decorations */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 transition-all duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div
                      className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 rounded-tr-xl transition-all duration-300"
                      style={{ borderColor: colors.primary }}
                    />
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 w-20 h-20 transition-all duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div
                      className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 rounded-bl-xl transition-all duration-300"
                      style={{ borderColor: colors.primary }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div
          className={`mt-20 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="inline-block">
            <div className="glass-effect p-10 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <p className="text-gray-400 font-mono text-sm">
                  More projects available on GitHub
                </p>
              </div>
              <a
                href="https://github.com/Gokcann"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,217,255,0.2), rgba(123,47,255,0.2))',
                  border: '1px solid rgba(0,217,255,0.3)',
                }}
              >
                <svg className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="gradient-text font-semibold">Explore GitHub Profile</span>
                <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
