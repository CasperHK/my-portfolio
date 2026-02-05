import { useState, useEffect, useRef } from 'react';
import { Send, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: '消息已发送',
      description: '感谢您的留言，我会尽快回复您。',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'QQ',
      handle: '123456789',
      icon: MessageCircle,
      color: 'hover:text-blue-400',
    },
    {
      name: 'WeChat',
      handle: 'shanlan_photo',
      icon: Mail,
      color: 'hover:text-green-400',
    },
    {
      name: 'Behance',
      handle: '@shanlan_arch',
      icon: ExternalLink,
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            联系方式
          </h2>
          <p
            className={`text-white/50 font-light tracking-wider transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            期待与您交流与合作
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-white/60 font-light tracking-wider mb-2"
                >
                  姓名
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 h-12"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white/60 font-light tracking-wider mb-2"
                >
                  邮箱
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 h-12"
                  placeholder="请输入您的邮箱地址"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-white/60 font-light tracking-wider mb-2"
                >
                  留言
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30 resize-none"
                  placeholder="请输入您想说的话..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-white text-black hover:bg-white/90 font-light tracking-wider transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    发送中...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    发送消息
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-light tracking-wider text-white mb-6">
                  让我们建立联系
                </h3>
                <p className="text-white/60 font-light leading-relaxed mb-8">
                  无论您是有合作意向、项目咨询，还是单纯想交流摄影心得，都欢迎随时联系我。我期待与每一位志同道合的朋友建立深厚的连接。
                </p>

                {/* Email */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <Mail size={18} className="text-white/40" />
                  </div>
                  <div>
                    <span className="text-white/40 text-xs tracking-wider block">
                      邮箱
                    </span>
                    <span className="text-white font-light">
                      hello@shanlan.photo
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-light tracking-wider text-white mb-6">
                  社交媒体
                </h4>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toast({
                          title: '即将跳转',
                          description: `正在前往 ${link.name} 主页`,
                        });
                      }}
                      className={`flex items-center justify-between p-4 border border-white/10 hover:border-white/30 transition-all duration-300 group ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <link.icon
                          size={20}
                          className={`text-white/40 group-hover:text-white transition-colors ${link.color}`}
                          strokeWidth={1.5}
                        />
                        <div>
                          <span className="text-white font-light block">
                            {link.name}
                          </span>
                          <span className="text-white/40 text-xs">
                            {link.handle}
                          </span>
                        </div>
                      </div>
                      <ExternalLink
                        size={16}
                        className="text-white/20 group-hover:text-white/60 transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-white/40 font-light italic text-sm leading-relaxed">
                  "每一次按下快门，都是一次与世界的心灵对话。期待通过镜头，与您分享更多美好的故事。"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
