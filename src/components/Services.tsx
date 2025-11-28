import type { Service } from '../types';

interface ServicesProps {
  data: Service[];
}

export default function Services({ data }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'camera':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-secondary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <h2 className="text-4xl lg:text-5xl font-bold font-mono">
                <span className="text-primary">$</span> ls <span className="gradient-text">services/</span>
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.map((service, index) => (
            <div
              key={index}
              className="terminal-window terminal-dots p-8 pt-12 rounded-2xl card-hover group relative overflow-hidden"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform border border-primary/30">
                      <div className="text-primary">
                        {getIcon(service.icon)}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-secondary font-mono text-sm">function</span>
                      <h3 className="text-xl font-semibold text-primary font-mono">
                        {service.title.replace(/\s+/g, '')}()
                      </h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-400 leading-relaxed pl-4 border-l-2 border-primary/30">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Code-like decoration */}
                <div className="mt-6 pt-4 border-t border-primary/10">
                  <div className="font-mono text-xs text-gray-500">
                    <span className="text-secondary">return</span>{' '}
                    <span className="text-primary">"Excellence & Innovation"</span>
                    <span className="text-gray-500">;</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
