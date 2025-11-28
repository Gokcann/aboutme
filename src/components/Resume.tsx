import type { Education, Experience } from '../types';

interface ResumeProps {
  education: Education[];
  experience: Experience[];
}

export default function Resume({ education, experience }: ResumeProps) {
  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-gray/50 to-dark"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <h2 className="text-4xl lg:text-5xl font-bold font-mono">
                <span className="text-primary">$</span> git log <span className="gradient-text">--all</span>
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg blur-md opacity-50"></div>
                <div className="relative p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/30">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">
                <span className="text-secondary">class</span>{' '}
                <span className="text-primary">Education</span>
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="terminal-window terminal-dots p-6 pt-12 rounded-xl card-hover relative"
                >
                  <div className="absolute top-3 right-4 text-xs font-mono text-gray-500">
                    commit #{index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 font-mono">
                    <span className="text-primary">{'>'}</span> {edu.institution}
                  </h4>
                  <div className="space-y-2 pl-4 border-l-2 border-primary/30">
                    <p className="text-primary font-medium text-sm">
                      <span className="text-gray-500 font-mono">📅</span> {edu.period}
                    </p>
                    <p className="text-gray-300 text-sm">{edu.degree}</p>
                    <p className="text-gray-500 text-xs">{edu.faculty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-lg blur-md opacity-50"></div>
                <div className="relative p-3 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg border border-secondary/30">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">
                <span className="text-secondary">class</span>{' '}
                <span className="text-secondary">Experience</span>
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="terminal-window terminal-dots p-6 pt-12 rounded-xl card-hover relative"
                >
                  <div className="absolute top-3 right-4 text-xs font-mono text-gray-500">
                    commit #{index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 font-mono">
                    <span className="text-secondary">{'>'}</span> {exp.title}
                  </h4>
                  <div className="pl-4 border-l-2 border-secondary/30">
                    <p className="text-secondary font-medium mb-4 text-sm">
                      <span className="text-gray-500 font-mono">📅</span> {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2 font-mono">
                          <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
