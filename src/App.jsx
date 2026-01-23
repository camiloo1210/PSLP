import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Process from './components/sections/Process';
import Team from './components/sections/Team';
import WhyUs from './components/sections/WhyUs';
// import CTA as a component if needed, but Footer already has the main CTA.
// We'll keep it for structure.
import CTA from './components/sections/CTA';
import { initGSAP } from './animations/gsapConfig';

function App() {
  console.log('App component rendering...');
  useEffect(() => {
    initGSAP();
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-pastel-cream min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Process />
        <Team />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
