import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { VisitObject } from './components/VisitObject';
import { Footer } from './components/Footer';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <VisitObject />
      </main>
      <Footer />
    </div>
  );
}
