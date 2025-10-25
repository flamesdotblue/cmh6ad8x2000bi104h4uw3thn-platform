import React from 'react';
import { Building2, Globe, Factory, Award } from 'lucide-react';

const posts = [
  {
    title: 'Behind the bubbles: How we craft consistent taste',
    excerpt: 'A look at our flavor labs, rigorous testing, and the people who make it happen.',
    date: 'Oct 2025',
  },
  {
    title: 'Designing a can for the future',
    excerpt: 'Sustainable aluminum, bold design language, and a better experience for everyone.',
    date: 'Sep 2025',
  },
  {
    title: 'Community first: Local partnerships that matter',
    excerpt: 'From music festivals to neighborhood clean-ups, we invest where we live.',
    date: 'Aug 2025',
  },
];

const stats = [
  { icon: Building2, label: 'Founded', value: '1986' },
  { icon: Globe, label: 'Markets', value: '65+ countries' },
  { icon: Factory, label: 'Facilities', value: '24 plants' },
  { icon: Award, label: 'Quality certifications', value: 'ISO 22000' },
];

const BlogCard = ({ title, excerpt, date }) => (
  <article className="group rounded-2xl border border-white/10 bg-neutral-900 p-5 transition-colors hover:bg-neutral-800/50">
    <div className="text-xs text-neutral-400">{date}</div>
    <h3 className="mt-2 text-lg font-semibold tracking-tight group-hover:underline">{title}</h3>
    <p className="mt-2 text-sm text-neutral-300">{excerpt}</p>
    <button className="mt-4 inline-flex text-sm font-medium text-white/90 underline-offset-4 hover:underline">Read more</button>
  </article>
);

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900 p-5">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-sm text-neutral-400">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  </div>
);

const InsightsSection = () => {
  return (
    <section id="insights" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest from the blog</h2>
            <p className="mt-2 text-neutral-300">Stories, product updates, and the craft behind the can.</p>
            <div className="mt-6 grid gap-4">
              {posts.map((p) => (
                <BlogCard key={p.title} {...p} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight">Business information</h2>
            <p className="mt-2 text-neutral-300">Snapshot of our operations and commitments.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>

            <div id="contact" className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/[0.03] p-6">
              <h3 className="text-lg font-semibold tracking-tight">Partner with DropletX</h3>
              <p className="mt-2 text-sm text-neutral-300">Distributors, retailers, and collaborators—let’s do something refreshing together.</p>
              <form className="mt-4 grid gap-3 sm:grid-cols-2">
                <input className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-500 focus:border-white/20" placeholder="Your name" />
                <input className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-500 focus:border-white/20" placeholder="Work email" />
                <input className="w-full rounded-lg border border-white/10 bg-neutral-950 px-3 py-2 text-sm outline-none ring-0 placeholder:text-neutral-500 focus:border-white/20 sm:col-span-2" placeholder="Company" />
                <button type="button" className="sm:col-span-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200">Request info</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
