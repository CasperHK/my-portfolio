import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 'urban',
    title: '城市建筑',
    subtitle: 'Urban Architecture',
    description: '以建筑师的视角审视城市空间，捕捉现代建筑与历史遗迹的几何美学。每一帧都是对城市肌理的深度解读，展现钢筋水泥丛林中的诗意栖居。',
    images: [
      '/images/project1-1.jpg',
      '/images/project1-2.jpg',
      '/images/project1-3.jpg',
      '/images/project1-4.jpg',
      '/images/project1-5.jpg',
    ],
  },
  {
    id: 'wilderness',
    title: '旷野遐想',
    subtitle: 'Wilderness Dreams',
    description: '远离城市喧嚣，深入自然腹地。在广袤的原野与寂静的山川之间，寻找内心的宁静与自然的对话，记录大自然最原始、最纯净的瞬间。',
    images: [
      '/images/project2-1.jpg',
      '/images/project2-2.jpg',
      '/images/project2-3.jpg',
      '/images/project2-4.jpg',
      '/images/project2-5.jpg',
    ],
  },
  {
    id: 'light',
    title: '建筑光影',
    subtitle: 'Light & Shadow',
    description: '光与影是建筑的灵魂。通过镜头捕捉光线穿过空间的瞬间，展现建筑内部微妙的光影变化，诠释光如何赋予建筑生命与情感。',
    images: [
      '/images/project3-1.jpg',
      '/images/project3-2.jpg',
      '/images/project3-3.jpg',
      '/images/project3-4.jpg',
      '/images/project3-5.jpg',
    ],
  },
  {
    id: 'life',
    title: '生活碎片',
    subtitle: 'Life Fragments',
    description: '生活中的平凡瞬间往往蕴含着最真挚的情感。用镜头记录那些稍纵即逝的美好时刻，拼凑成一幅完整的生活画卷。',
    images: [
      '/images/project4-1.jpg',
      '/images/project4-2.jpg',
      '/images/project4-3.jpg',
      '/images/project4-4.jpg',
      '/images/project4-5.jpg',
      '/images/project4-6.jpg',
    ],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const openLightbox = (project: Project, index: number) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white mb-6 transition-all duration-700 ${
              visibleSections.has('portfolio')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            作品集
          </h2>
          <p
            className={`text-white/50 font-light tracking-wider max-w-xl transition-all duration-700 delay-200 ${
              visibleSections.has('portfolio')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            每一张照片都是一个故事，每一个项目都是一段旅程
          </p>
        </div>

        {/* Projects Grid - Asymmetric Layout */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              ref={(el) => { sectionRefs.current[project.id] = el; }}
              className={`transition-all duration-700 ${
                visibleSections.has(project.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Project Info */}
                <div
                  className={`lg:col-span-4 ${
                    index % 2 === 1 ? 'lg:order-2 lg:text-right' : ''
                  }`}
                >
                  <div className="sticky top-32">
                    <span className="text-white/30 text-sm tracking-widest font-light mb-4 block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-light tracking-wider text-white mb-2">
                      {project.title}
                    </h3>
                    <span className="text-white/40 text-sm tracking-wider font-light block mb-6">
                      {project.subtitle}
                    </span>
                    <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Images - Asymmetric Grid */}
                <div
                  className={`lg:col-span-8 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative overflow-hidden group cursor-pointer ${
                          imgIndex === 0 && project.images.length % 2 === 1
                            ? 'md:col-span-2 md:row-span-2'
                            : ''
                        } ${
                          imgIndex === 2 && project.images.length === 6
                            ? 'md:col-span-2'
                            : ''
                        }`}
                        onClick={() => openLightbox(project, imgIndex)}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={image}
                            alt={`${project.title} - ${imgIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center">
                              <span className="text-white text-sm font-light">
                                查看
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[80vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
            {/* Image Counter */}
            <div className="text-center mt-4">
              <span className="text-white/50 text-sm font-light">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
