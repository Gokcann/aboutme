import { useState } from 'react';
import type { Service } from '../types';

interface ServicesProps {
  data: Service[];
}

export default function Services({ data }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'database':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case 'cpu':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'camera':
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-gray/50 to-dark"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <h2 className="text-4xl lg:text-5xl font-bold font-mono">
                <span className="text-primary">$</span> ./run <span className="gradient-text">services.sh</span>
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((service, index) => (
            <div
              key={index}
              className="terminal-window terminal-dots rounded-2xl p-8 pt-14 card-hover group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Service index */}
              <div className="absolute top-3 right-4 text-xs font-mono text-gray-500">
                [{index}]
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>

              <div className="relative z-10">
                {/* Icon with animation */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-xl transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-50' : 'opacity-0'}`}></div>
                  <div className={`relative service-icon w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-primary/30 text-primary transition-all duration-500 ${hoveredIndex === index ? 'border-primary/60 shadow-lg shadow-primary/20 scale-110' : ''}`}>
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Title with terminal style */}
                <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center gap-2">
                  <span className="text-primary">{'>'}</span>
                  <span className={`transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : ''}`}>
                    {service.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm min-h-[60px]">
                  {service.description}
                </p>

                {/* Animated underline */}
                <div className={`h-0.5 bg-gradient-to-r from-primary via-secondary to-accent mt-6 transition-all duration-500 ${hoveredIndex === index ? 'w-full' : 'w-0'}`}></div>

                {/* Status indicator */}
                <div className={`absolute bottom-4 right-4 flex items-center gap-2 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="w-2 h-2 bg-terminal rounded-full animate-pulse"></span>
                  <span className="text-xs text-terminal font-mono">running</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
