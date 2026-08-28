const projects = [
  {
    title: 'Quantum-Enhanced Lung Cancer Diagnosis',
    type: 'Research Project',
    description:
      'Final year design project fusing CNN-extracted features from CT scans and histopathology slides using quantum circuits and a variational quantum classifier to predict cancer subtypes (LUAD vs LUSC).',
    tags: ['AI', 'Quantum ML', 'Healthcare', 'Computer Vision', 'Research'],
    gradient: 'from-blue-500/20 to-purple-500/20',
    border: 'hover:border-blue-500/50',
  },
  {
    title: 'Crisis Communication PWA',
    type: 'Hackathon — 3rd Place 🏆',
    description:
      'Offline-first crisis communication web app combining LoRa/BLE mesh, Wi-Fi Direct, and cryptographic QR codes — built during the July Revolution Hackathon.',
    tags: ['PWA', 'Mesh Network', 'Cryptography', 'Offline-First'],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    border: 'hover:border-emerald-500/50',
  },
  {
    title: 'StudyBuddy',
    type: 'Full-Stack Web App',
    description:
      'Student-focused educational platform with authentication, dashboards, subject-wise materials, progress tracking, and admin panels — built with Next.js, TypeScript, and Supabase.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'hover:border-cyan-500/50',
  },
  {
    title: 'HexRail — Train Ticket System',
    type: 'Software Engineering',
    description:
      'Comprehensive train ticket management application featuring booking, availability search, AI chatbot integration, food selection, and unique transaction IDs.',
    tags: ['Software Engineering', 'AI Chatbot', 'Database', 'Full-Stack'],
    gradient: 'from-amber-500/20 to-orange-500/20',
    border: 'hover:border-amber-500/50',
  },
  {
    title: 'BD Celebrity Rating Platform',
    type: 'Web + AI Project',
    description:
      'Web application with user registration, celebrity categories, star-rating system, and an AI facial similarity feature comparing user faces against celebrity images.',
    tags: ['Web App', 'Computer Vision', 'AI', 'Face Recognition'],
    gradient: 'from-rose-500/20 to-pink-500/20',
    border: 'hover:border-rose-500/50',
  },
  {
    title: 'Anime Streaming Platform',
    type: 'Database Project',
    description:
      'Database-driven anime streaming platform demonstrating relational database design, SQL, and backend development using MySQL, PHP, and web technologies.',
    tags: ['MySQL', 'PHP', 'SQL', 'Database Design', 'Web'],
    gradient: 'from-violet-500/20 to-indigo-500/20',
    border: 'hover:border-violet-500/50',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing our work across AI research,
            software engineering, and web development.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`glass-card overflow-hidden transition-all duration-300 hover:-translate-y-1 ${project.border}`}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">
                  {project.type}
                </div>
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-slate-700/50 text-slate-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
