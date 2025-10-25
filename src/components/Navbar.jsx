import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-950/80 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/90 shadow shadow-red-600/40">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">ColaCo</div>
              <div className="text-[11px] text-neutral-400">Beverages</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#brands" className="text-sm text-neutral-300 hover:text-white transition-colors">Brands</a>
            <a href="#insights" className="text-sm text-neutral-300 hover:text-white transition-colors">Insights</a>
            <a href="#contact" className="text-sm text-neutral-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="rounded-lg bg-white text-neutral-900 px-3 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors">Partner with us</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
