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
// We'll keep it for structure.
import CTA from './components/sections/CTA';
import { initGSAP } from './animations/gsapConfig';
import SakuraBackground from './components/effects/SakuraBackground';
import OusmaneLanding from './components/layout/OusmaneLanding';

function App() {
  console.log('App component rendering...');
  useEffect(() => {
    initGSAP();
  }, []);

  return (
    <div className="font-sans antialiased bg-[#1a0f1f] min-h-screen flex flex-col relative">
      {/* <SakuraBackground /> */}
      <OusmaneLanding />
    </div>
  );
}

export default App;
