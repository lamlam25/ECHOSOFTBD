const techCategories = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'PHP'],
  },
  {
    title: 'Web & Frameworks',
    items: ['Next.js', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'SQL'],
  },
  {
    title: 'AI & ML',
    items: ['Machine Learning', 'Computer Vision', 'Deep Learning', 'Quantum ML'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Linux/WSL', 'Anaconda'],
  },
  {
    title: 'Concepts',
    items: ['OOP', 'DSA', 'System Design', 'Database Design', 'Algorithm Design'],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            <span className="gradient-text">Technologies</span> We Work With
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our toolkit spans modern languages, frameworks, and platforms —
            chosen to deliver robust, scalable solutions.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <div key={category.title} className="glass-card p-6">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/50 hover:border-blue-500/50 hover:text-blue-300 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
