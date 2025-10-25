import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.35)_45%,_rgba(0,0,0,0.75)_100%)]"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200 backdrop-blur">
            New • Animated 3D can experience
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Refreshment engineered by DropletX
          </h1>
          <p className="mt-4 text-base text-neutral-200 sm:text-lg">
            From sparkling classics to bold new blends, DropletX Private Limited crafts beverages that elevate every moment. Explore our brands, read our stories, and see how we do business.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#brands" className="pointer-events-auto rounded-lg bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-white shadow shadow-sky-500/40 transition hover:bg-sky-400">
              Explore brands
            </a>
            <a href="#insights" className="pointer-events-auto rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
              Read insights
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
