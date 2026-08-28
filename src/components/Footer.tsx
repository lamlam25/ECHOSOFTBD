const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-bold gradient-text"
            >
              ECHOSOFTBD
            </a>
            <p className="text-sm text-slate-500 mt-1">
              AI &amp; Software Engineering Company
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2025 ECHOSOFTBD. All rights reserved. Built in Bangladesh
            🇧🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
