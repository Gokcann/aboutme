interface SkillsProps {
  data: string[];
}

const skillLevels: { [key: string]: number } = {
  'NodeJS': 90,
  'Java': 85,
  'Spring Framework': 80,
  'AWS': 85,
  'PL/SQL': 75,
  'Kafka': 80,
  'OpenSearch': 70,
  'PostgreSQL': 85,
  'Git & SubVersion': 80
};

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-4 relative">
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
          {/* Skill bars */}
          <div className="terminal-window terminal-dots rounded-2xl p-8 pt-12 space-y-6">
            <div className="font-mono text-sm text-gray-400 mb-6">
              <span className="text-primary">// </span>Backend Technologies
            </div>
            {data.slice(0, Math.ceil(data.length / 2)).map((skill, index) => {
              const level = skillLevels[skill] || 70;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium font-mono text-sm">
                      <span className="text-secondary">const</span>{' '}
                      <span className="text-primary">{skill.replace(/\s+/g, '')}</span>{' '}
                      <span className="text-gray-500">=</span>
                    </span>
                    <span className="text-primary font-mono text-xs">{level}%</span>
                  </div>
                  <div className="h-2 bg-dark/50 rounded-full overflow-hidden border border-primary/20">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full skill-bar relative"
                      style={{ '--skill-width': `${level}%` } as React.CSSProperties}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="terminal-window terminal-dots rounded-2xl p-8 pt-12 space-y-6">
            <div className="font-mono text-sm text-gray-400 mb-6">
              <span className="text-primary">// </span>Tools & Infrastructure
            </div>
            {data.slice(Math.ceil(data.length / 2)).map((skill, index) => {
              const level = skillLevels[skill] || 70;
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium font-mono text-sm">
                      <span className="text-secondary">const</span>{' '}
                      <span className="text-primary">{skill.replace(/\s+/g, '')}</span>{' '}
                      <span className="text-gray-500">=</span>
                    </span>
                    <span className="text-primary font-mono text-xs">{level}%</span>
                  </div>
                  <div className="h-2 bg-dark/50 rounded-full overflow-hidden border border-primary/20">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full skill-bar relative"
                      style={{ '--skill-width': `${level}%` } as React.CSSProperties}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech stack cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.map((skill, index) => (
            <div
              key={index}
              className="glass-effect p-4 rounded-xl card-hover group text-center"
            >
              <div className="relative">
                <div className="text-2xl mb-2">
                  {['NodeJS', 'Java'].includes(skill) ? '⚡' :
                   ['AWS'].includes(skill) ? '☁️' :
                   ['PostgreSQL', 'PL/SQL'].includes(skill) ? '🗄️' :
                   ['Kafka'].includes(skill) ? '📨' :
                   ['Git & SubVersion'].includes(skill) ? '🔀' : '🔧'}
                </div>
                <p className="text-sm font-medium text-gray-300 group-hover:text-primary transition-colors">
                  {skill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
