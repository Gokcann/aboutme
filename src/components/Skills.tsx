import { useState, useEffect, useRef } from 'react';

interface SkillsProps {
  data: string[];
}

const skillLevels: { [key: string]: number } = {
  'Java (Spring)': 85,
  'SQL (PL/SQL)': 80,
  'JavaScript (Node & React)': 90,
  'Git': 85,
  'RDBMS': 80,
  'AWS (EC2, RDS)': 85,
  'Redis': 75,
  'Kafka': 80,
  'OpenSearch': 70
};

const skillIcons: { [key: string]: string } = {
  'Java (Spring)': '☕',
  'SQL (PL/SQL)': '🗄️',
  'JavaScript (Node & React)': '⚡',
  'Git': '🔀',
  'RDBMS': '💾',
  'AWS (EC2, RDS)': '☁️',
  'Redis': '🔴',
  'Kafka': '📨',
  'OpenSearch': '🔍'
};

export default function Skills({ data }: SkillsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <h2 className="text-4xl lg:text-5xl font-bold font-mono">
                <span className="text-primary">$</span> cat <span className="gradient-text">tech-stack.json</span>
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skill bars - Left column */}
          <div className="terminal-window terminal-dots rounded-2xl p-8 pt-12 space-y-6">
            <div className="font-mono text-sm text-gray-400 mb-6">
              <span className="text-primary">// </span>Backend & Languages
            </div>
            {data.slice(0, Math.ceil(data.length / 2)).map((skill, index) => {
              const level = skillLevels[skill] || 70;
              const icon = skillIcons[skill] || '🔧';
              return (
                <div
                  key={index}
                  className="space-y-2 group cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium font-mono text-sm flex items-center gap-2">
                      <span className="text-lg transition-transform group-hover:scale-125">{icon}</span>
                      <span className="text-secondary">const</span>{' '}
                      <span className={`transition-colors ${hoveredSkill === skill ? 'text-primary' : 'text-gray-300'}`}>
                        {skill.replace(/\s+/g, '_').replace(/[()&,]/g, '')}
                      </span>{' '}
                      <span className="text-gray-500">=</span>
                    </span>
                    <span className="text-primary font-mono text-xs">{level}%</span>
                  </div>
                  <div className="h-2.5 bg-dark/50 rounded-full overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full skill-bar relative"
                      style={{
                        '--skill-width': `${level}%`,
                        width: isVisible ? `${level}%` : '0%',
                        transition: 'width 1.5s ease-out'
                      } as React.CSSProperties}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skill bars - Right column */}
          <div className="terminal-window terminal-dots rounded-2xl p-8 pt-12 space-y-6">
            <div className="font-mono text-sm text-gray-400 mb-6">
              <span className="text-primary">// </span>Tools & Infrastructure
            </div>
            {data.slice(Math.ceil(data.length / 2)).map((skill, index) => {
              const level = skillLevels[skill] || 70;
              const icon = skillIcons[skill] || '🔧';
              return (
                <div
                  key={index}
                  className="space-y-2 group cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium font-mono text-sm flex items-center gap-2">
                      <span className="text-lg transition-transform group-hover:scale-125">{icon}</span>
                      <span className="text-secondary">const</span>{' '}
                      <span className={`transition-colors ${hoveredSkill === skill ? 'text-primary' : 'text-gray-300'}`}>
                        {skill.replace(/\s+/g, '_').replace(/[()&,]/g, '')}
                      </span>{' '}
                      <span className="text-gray-500">=</span>
                    </span>
                    <span className="text-primary font-mono text-xs">{level}%</span>
                  </div>
                  <div className="h-2.5 bg-dark/50 rounded-full overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full relative"
                      style={{
                        width: isVisible ? `${level}%` : '0%',
                        transition: `width 1.5s ease-out ${index * 0.1}s`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive tech stack cards */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {data.map((skill, index) => {
            const icon = skillIcons[skill] || '🔧';
            return (
              <div
                key={index}
                className={`glass-effect p-4 rounded-xl card-hover group text-center cursor-pointer transition-all duration-300 ${hoveredSkill === skill ? 'scale-110 border-primary/50' : ''}`}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative">
                  <div className={`text-3xl mb-2 transition-all duration-300 ${hoveredSkill === skill ? 'scale-125 animate-bounce' : ''}`}>
                    {icon}
                  </div>
                  <p className={`text-xs font-medium transition-colors ${hoveredSkill === skill ? 'text-primary' : 'text-gray-300'}`}>
                    {skill.split(' ')[0]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
