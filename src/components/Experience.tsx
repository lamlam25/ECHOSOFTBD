const achievements = [
  {
    title: 'July Revolution Hackathon',
    subtitle: '3rd Place Winner',
    description:
      'Built an offline-first crisis communication PWA combining LoRa/BLE mesh networking, Wi-Fi Direct, and cryptographic QR codes — inspired by the July 2024 Bangladesh internet shutdown.',
    icon: '🏆',
  },
  {
    title: "Dean's List Award",
    subtitle: 'Daffodil International University',
    description:
      'Recognized for outstanding academic performance with a CGPA of 3.89 in Computer Science & Engineering.',
    icon: '🎓',
  },
  {
    title: 'Competitive Programming',
    subtitle: 'LeetCode & ACM Contests',
    description:
      'Active competitive programmer on LeetCode, participated in multiple ACM-organized programming contests, with strong skills in DSA and algorithmic problem solving.',
    icon: '💻',
  },
  {
    title: 'BDOI 2024 Volunteer',
    subtitle: 'Bangladesh Olympiad in Informatics',
    description:
      'Volunteered at the Bangladesh Olympiad in Informatics (BDOI) 2024, contributing to the national computing talent pipeline.',
    icon: '🤝',
  },
  {
    title: 'Research Project Approved',
    subtitle: 'Final Year Design Project',
    description:
      'Quantum-enhanced medical AI research proposal formally approved by the Head of CSE Department, DIU, with dual supervisors.',
    icon: '🔬',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Experience &amp;{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Highlights from competitions, research, volunteering, and academic
            excellence.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="text-sm text-blue-400 font-medium mt-1 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
