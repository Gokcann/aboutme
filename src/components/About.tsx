import type { About as AboutType } from '../types';

interface AboutProps {
  data: AboutType;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 bg-dark-gray/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {data.description.map((paragraph, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl card-hover"
            >
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
