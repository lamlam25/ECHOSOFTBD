export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — text content */}
          <div>
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Engineering the Future with{' '}
              <span className="gradient-text">AI &amp; Innovation</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              ECHOSOFTBD is a technology company focused on building intelligent
              software solutions. We combine expertise in artificial
              intelligence, modern software engineering, and research-driven
              development to create impactful digital products.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Founded by Sumaiya Islam Lamia, a Computer Science &amp;
              Engineering student at Daffodil International University,
              ECHOSOFTBD is driven by a vision to bridge the gap between academic
              research and real-world software solutions — specializing in
              AI-powered applications, web platforms, and intelligent systems.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <div className="text-2xl font-bold gradient-text">3.89</div>
                <div className="text-sm text-slate-400 mt-1">
                  CGPA — Dean&apos;s List
                </div>
              </div>
              <div className="glass-card p-4">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-slate-400 mt-1">
                  Projects Delivered
                </div>
              </div>
              <div className="glass-card p-4">
                <div className="text-2xl font-bold gradient-text">3rd</div>
                <div className="text-sm text-slate-400 mt-1">
                  Hackathon Winner
                </div>
              </div>
              <div className="glass-card p-4">
                <div className="text-2xl font-bold gradient-text">AI</div>
                <div className="text-sm text-slate-400 mt-1">
                  Research Focus
                </div>
              </div>
            </div>
          </div>

          {/* Right — vision card */}
          <div className="relative">
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                To become a leading technology company in Bangladesh that
                delivers AI-powered, research-backed software solutions —
                transforming ideas into intelligent systems that solve real
                problems.
              </p>

              <div className="space-y-4">
                {/* Innovation */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Innovation First</div>
                    <div className="text-sm text-slate-400">
                      Research-driven approach to every project
                    </div>
                  </div>
                </div>

                {/* Quality */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm">
                      Quality Engineering
                    </div>
                    <div className="text-sm text-slate-400">
                      Built on solid CS fundamentals
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-sm">Impact Focused</div>
                    <div className="text-sm text-slate-400">
                      Solutions that matter in the real world
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
