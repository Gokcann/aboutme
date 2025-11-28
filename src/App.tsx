import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Footer from './components/Footer';
import portfolioData from './data/portfolio.json';
import type { PortfolioData } from './types';

const data = portfolioData as PortfolioData;

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero data={data.personal} />
      <About data={data.about} />
      <Services data={data.services} />
      <Resume education={data.education} experience={data.experience} />
      <Skills data={data.skills} />
      <Footer />
    </div>
  );
}

export default App;
