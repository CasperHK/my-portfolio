import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light tracking-wider text-white mb-2">
              山岚<span className="text-white/30">。</span>
            </h3>
            <p className="text-white/30 text-xs tracking-wider">
              © {currentYear} 山岚摄影. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            {[
              { name: '首页', href: '#home' },
              { name: '作品集', href: '#portfolio' },
              { name: '关于我', href: '#about' },
              { name: '联系方式', href: '#contact' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-sm text-white/40 hover:text-white/70 transition-colors duration-300 font-light tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300 group"
            aria-label="Back to top"
          >
            <span className="text-sm font-light tracking-wider">返回顶部</span>
            <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/40 flex items-center justify-center transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
