import { useEffect, useRef, useState } from 'react';
import { Users, GraduationCap, BookOpen, Target } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10+',
    label: 'Experienced Faculty',
  },
  {
    icon: GraduationCap,
    value: '500+',
    label: 'Students Guided',
  },
  {
    icon: BookOpen,
    value: '95%+',
    label: 'Academic Focus',
  },
  {
    icon: Target,
    value: '100%',
    label: 'Commitment to Students',
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24"
      style={{ background: 'linear-gradient(180deg, #071f35 0%, #0a2540 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center text-center rounded-[18px] px-6 py-10 border transition-all duration-500 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.08)',
                minHeight: '255px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? 'translateY(0)'
                  : 'translateY(28px)',
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.background = 'rgba(21,150,209,0.10)';
                e.currentTarget.style.borderColor = 'rgba(21,150,209,0.35)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(21,150,209,0.20)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = isVisible ? 'translateY(0)' : 'translateY(28px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon container */}
              <div
                className="flex items-center justify-center rounded-xl mb-6"
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(21,150,209,0.15)',
                  border: '1px solid rgba(21,150,209,0.30)',
                }}
              >
                <Icon
                  style={{ width: '30px', height: '30px', color: '#1596D1', strokeWidth: 1.75 }}
                />
              </div>

              {/* Number */}
              <div
                className="font-extrabold text-white leading-none mb-3"
                style={{ fontSize: 'clamp(36px, 5vw, 46px)', fontWeight: 800 }}
              >
                {value}
              </div>

              {/* Label */}
              <div
                className="font-medium"
                style={{ fontSize: '18px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
