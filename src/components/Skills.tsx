interface SkillsProps {
  data: string[];
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="glass-effect p-8 lg:p-12 rounded-2xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {data.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-6 py-3 bg-dark rounded-lg border border-primary/30 group-hover:border-primary transition-all">
                  <span className="text-white font-medium text-lg">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
