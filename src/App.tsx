import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Mission } from './sections/Mission';
import { Program } from './sections/Program';
import { Enrollment } from './sections/Enrollment';
import { Mentor } from './sections/Mentor';
import { Benefits } from './sections/Benefits';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import { AmbientOrb } from './components/ui/AmbientOrb';
import { GlobalBackground } from './components/ui/GlobalBackground';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden text-foreground">
      <GlobalBackground />
      <AmbientOrb />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Mission />
        <Program />
        <Enrollment />
        <Mentor />
        <Benefits />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
