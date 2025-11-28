import type { About as AboutType } from '../types';

interface AboutProps {
  data: AboutType;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-gray/50 to-dark"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <h2 className="text-4xl lg:text-5xl font-bold font-mono">
                <span className="text-primary">$</span> cat <span className="gradient-text">README.md</span>
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {data.description.map((paragraph, index) => (
            <div
              key={index}
              className="terminal-window terminal-dots p-8 pt-12 rounded-2xl card-hover"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed flex-1">
                    <span className="text-primary font-mono text-sm mr-2">{'>'}</span>
                    {paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Years Experience', value: '5+', icon: '📅' },
            { label: 'Projects Completed', value: '50+', icon: '🚀' },
            { label: 'Technologies', value: '10+', icon: '⚡' },
            { label: 'Coffee Consumed', value: '∞', icon: '☕' }
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl text-center card-hover group"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
