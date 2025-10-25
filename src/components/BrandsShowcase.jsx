import React from 'react';

const BRANDS = [
  { name: 'DropletX Classic', flavor: 'Original Cola', color: 'from-sky-500 to-blue-400' },
  { name: 'Aqua Citrus', flavor: 'Lemon-Lime', color: 'from-emerald-500 to-teal-400' },
  { name: 'Berry Fizz', flavor: 'Mixed Berry', color: 'from-fuchsia-500 to-pink-400' },
  { name: 'Cold Brew Cola', flavor: 'Cola + Coffee', color: 'from-amber-600 to-orange-500' },
  { name: 'Zero Sugar', flavor: 'Guilt-free Cola', color: 'from-slate-600 to-zinc-500' },
  { name: 'Ginger Spark', flavor: 'Ginger Ale', color: 'from-amber-500 to-yellow-400' },
];

const BrandCard = ({ name, flavor, color }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
    <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-60 blur-2xl transition-all duration-300 group-hover:scale-125`} />
    <div className="relative p-5">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
          <p className="mt-1 text-sm text-neutral-300">{flavor}</p>
        </div>
        <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-inset ring-white/15" />
      </div>
      <div className="mt-2 h-32 w-full rounded-xl bg-gradient-to-tr from-white/10 to-white/5 ring-1 ring-inset ring-white/10" />
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-neutral-400">12 fl oz · 355 ml</span>
        <button className="rounded-md bg-white/90 px-3 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-white">Learn more</button>
      </div>
    </div>
  </div>
);

const BrandsShowcase = () => {
  return (
    <section id="brands" className="relative z-10 py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our brands</h2>
          <p className="mt-3 text-neutral-300">A family of drinks crafted for every taste, mood, and moment.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b) => (
            <BrandCard key={b.name} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase;
