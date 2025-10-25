import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsShowcase from './components/BrandsShowcase';
import InsightsSection from './components/InsightsSection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <BrandsShowcase />
        <InsightsSection />
      </main>
      <footer className="border-t border-white/10 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-neutral-400">© {new Date().getFullYear()} ColaCo Beverages. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <a href="#brands" className="hover:text-white transition-colors">Brands</a>
              <a href="#insights" className="hover:text-white transition-colors">Insights</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
