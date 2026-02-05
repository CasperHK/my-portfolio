import { useEffect, useRef, useState } from 'react';
import { Camera, Building2, Award, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Camera, label: '摄影作品', value: '500+' },
    { icon: Building2, label: '建筑项目', value: '50+' },
    { icon: Award, label: '获奖作品', value: '20+' },
    { icon: Heart, label: '合作品牌', value: '30+' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            关于我
          </h2>
          <p
            className={`text-white/50 font-light tracking-wider transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            用光影书写故事，用镜头诠释美学
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/portrait.jpg"
                  alt="山岚"
                  className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-white/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-white/5 -z-10" />
            </div>
          </div>

          {/* Bio Content */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-8">
              {/* Name & Title */}
              <div>
                <h3 className="text-3xl md:text-4xl font-light tracking-wider text-white mb-2">
                  山岚
                </h3>
                <p className="text-white/50 font-light tracking-widest text-sm">
                  建筑师 / 摄影师 / 视觉艺术家
                </p>
              </div>

              {/* Bio Text */}
              <div className="space-y-6">
                <p className="text-white/70 font-light leading-relaxed">
                  我是一位跨界的视觉创作者，拥有超过十年的建筑设计与摄影经验。建筑学背景赋予了我独特的空间感知能力，而摄影则成为我表达这种感知的媒介。
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  在我的作品中，光与影不仅仅是构图元素，更是情感的载体。我相信每一个空间都有其独特的故事，每一次光影的变化都是自然与建筑的对话。我的使命就是捕捉这些转瞬即逝的美好瞬间，让观者在我的作品中感受到宁静与震撼。
                </p>
                <p className="text-white/70 font-light leading-relaxed">
                  从城市天际线到荒野大漠，从现代建筑到历史遗迹，我的镜头始终追寻着那些能够触动心灵的画面。我希望我的作品能够超越单纯的视觉记录，成为观者与自己内心对话的桥梁。
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <stat.icon
                      size={24}
                      className="mx-auto mb-3 text-white/40"
                      strokeWidth={1}
                    />
                    <div className="text-2xl font-light text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="relative pl-6 border-l-2 border-white/20">
                <p className="text-white/50 font-light italic text-sm md:text-base leading-relaxed">
                  "摄影是一种爱的行为，它让我们学会用更温柔的目光看待这个世界。"
                </p>
                <span className="text-white/30 text-xs mt-2 block">
                  — 山岚
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
