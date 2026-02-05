import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home-hero.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Main Title */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider text-white mb-6">
            山岚<span className="text-white/50">。</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-light tracking-widest text-white/70">
            建筑师 / 摄影师
          </p>
        </div>

        {/* Divider */}
        <div
          className={`w-16 h-px bg-white/30 mx-auto mt-8 mb-8 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Tagline */}
        <div
          className={`transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm md:text-base font-light tracking-wider text-white/50 max-w-md mx-auto leading-relaxed">
            以建筑师之眼，捕捉光影与空间的诗意对话
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={scrollToPortfolio}
          className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors duration-300"
          aria-label="Scroll to portfolio"
        >
          <span className="text-xs tracking-widest mb-2 font-light">探索作品</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </div>

      {/* Side Lines Decoration */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Home;
