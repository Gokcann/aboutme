import { useState, useEffect, useRef } from 'react';
import type { Education, Experience } from '../types';

interface ResumeProps {
  education: Education[];
  experience: Experience[];
}

export default function Resume({ education, experience }: ResumeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExp, setActiveExp] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} id="resume" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-gray/50 to-dark"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl morph-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl morph-blob" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-secondary to-secondary"></div>
              <span className="text-secondary font-mono text-sm tracking-widest uppercase">Career Journey</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-secondary to-secondary"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Experience &</span>{' '}
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto">
              A timeline of my professional growth and continuous learning
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-1">
            <div className={`sticky top-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {/* Education Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-lg opacity-50"></div>
                  <div className="relative p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-primary/30 backdrop-blur-sm">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                  <p className="text-gray-500 text-sm font-mono">Academic Background</p>
                </div>
              </div>

              {/* Education Card */}
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="glass-effect rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    {/* Graduation Cap Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                          {edu.institution}
                        </h4>
                        <p className="text-primary/80 text-sm font-medium mt-1">{edu.degree}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{edu.period}</span>
                    </div>

                    {edu.faculty && (
                      <p className="text-gray-400 text-sm mt-3 pl-4 border-l-2 border-primary/30">
                        {edu.faculty}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className={`glass-effect rounded-xl p-4 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-gray-500 text-xs font-mono mt-1">Years Experience</div>
                </div>
                <div className={`glass-effect rounded-xl p-4 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
                  <div className="text-3xl font-bold gradient-text">3</div>
                  <div className="text-gray-500 text-xs font-mono mt-1">Companies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline Column */}
          <div className="lg:col-span-2">
            {/* Experience Header */}
            <div className={`flex items-center gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-xl blur-lg opacity-50"></div>
                <div className="relative p-4 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl border border-secondary/30 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                <p className="text-gray-500 text-sm font-mono">Professional Timeline</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-primary to-accent"></div>

              {/* Experience Cards */}
              <div className="space-y-8">
                {experience.map((exp, index) => {
                  const isActive = activeExp === index;
                  const colors = [
                    { border: 'border-secondary', bg: 'bg-secondary', text: 'text-secondary', glow: 'shadow-secondary/20' },
                    { border: 'border-primary', bg: 'bg-primary', text: 'text-primary', glow: 'shadow-primary/20' },
                    { border: 'border-accent', bg: 'bg-accent', text: 'text-accent', glow: 'shadow-accent/20' }
                  ][index % 3];

                  return (
                    <div
                      key={index}
                      className={`relative pl-20 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}
                      style={{ transitionDelay: `${200 + index * 150}ms` }}
                      onMouseEnter={() => setActiveExp(index)}
                      onMouseLeave={() => setActiveExp(null)}
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-6 top-8 w-5 h-5 rounded-full ${colors.bg} border-4 border-dark-gray transition-all duration-300 ${isActive ? 'scale-125 timeline-dot' : ''}`}>
                        <div className={`absolute inset-0 rounded-full ${colors.bg} animate-ping opacity-20`}></div>
                      </div>

                      {/* Card */}
                      <div
                        className={`exp-card-glow terminal-window rounded-2xl p-6 transition-all duration-500 cursor-pointer ${
                          isActive
                            ? `border-2 ${colors.border} shadow-xl ${colors.glow}`
                            : 'border-2 border-transparent hover:border-white/10'
                        }`}
                      >
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {index === 0 && (
                                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                                  Current
                                </span>
                              )}
                            </div>
                            <h4 className={`text-xl font-bold transition-colors duration-300 ${isActive ? colors.text : 'text-white'}`}>
                              {exp.title.split(' - ')[0]}
                            </h4>
                            <p className={`font-medium mt-1 ${colors.text}`}>
                              {exp.title.split(' - ')[1]}
                            </p>
                          </div>
                          <div className={`px-4 py-2 rounded-lg font-mono text-sm ${isActive ? `${colors.bg}/10 ${colors.text}` : 'bg-white/5 text-gray-400'} transition-colors duration-300`}>
                            {exp.period}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="space-y-3 mt-6">
                          {exp.responsibilities.map((resp, idx) => (
                            <div
                              key={idx}
                              className={`flex items-start gap-3 transition-all duration-300 ${
                                isActive ? 'translate-x-2' : ''
                              }`}
                              style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-300 ${isActive ? colors.bg : 'bg-gray-600'}`}></div>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {resp}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Tech indicators (subtle) */}
                        <div className={`mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                          {getTechFromResponsibilities(exp.responsibilities).slice(0, 5).map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className={`px-2 py-1 text-xs font-mono rounded transition-colors duration-300 ${
                                isActive
                                  ? `${colors.bg}/20 ${colors.text} border border-current/30`
                                  : 'bg-white/5 text-gray-500'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to extract tech keywords from responsibilities
function getTechFromResponsibilities(responsibilities: string[]): string[] {
  const techKeywords = [
    'Node.js', 'NestJS', 'Java', 'Spring Boot', 'AWS', 'ECS', 'Fargate',
    'PostgreSQL', 'Redis', 'Elasticsearch', 'RabbitMQ', 'Docker', 'Kubernetes',
    'Grafana', 'CloudWatch', 'Oracle', 'PL/SQL', 'HL7', 'API', 'Microservices'
  ];

  const foundTech = new Set<string>();
  const text = responsibilities.join(' ');

  techKeywords.forEach(tech => {
    if (text.toLowerCase().includes(tech.toLowerCase())) {
      foundTech.add(tech);
    }
  });

  return Array.from(foundTech);
}
