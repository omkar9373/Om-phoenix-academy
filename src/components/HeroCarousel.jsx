import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Users, 
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const slides = [
  {
    id: 1,
    badge: 'OM PHOENIX LEARNING ACADEMY',
    badgeAccent: 'ACADEMIC EXCELLENCE',
    headingPrefix: 'Unlock Your Potential with',
    headingHighlight: 'Expert Guidance',
    headingSuffix: '',
    description:
      'Build strong concepts, improve your confidence, and achieve your academic goals with expert teachers and personalized learning.',
    highlights: [
      'Expert Faculty & Personal Guidance',
      'Concept-Based Learning',
      'Learn Today, Lead Tomorrow',
    ],
    primaryCta: {
      text: 'Explore Courses',
      to: '/courses',
    },
    secondaryCta: {
      text: 'Apply Now',
      to: '/admission',
    },
    teacher: {
      image: '/images/teachers/teacher-jee.jpg',
      name: 'Senior Academic Faculty',
      role: 'IIT-JEE & Foundation Expert',
      badge: '★ 10+ Years Mentorship',
      secondaryBadge: '99.55% Top Results',
    },
  },
  {
    id: 2,
    badge: 'OM PHOENIX LEARNING ACADEMY',
    badgeAccent: 'JEE • NEET • MHT-CET',
    headingPrefix: 'Your Dream College',
    headingHighlight: 'Starts Here',
    headingSuffix: '',
    description:
      'Prepare with expert guidance, regular practice, and concept-based learning.',
    highlights: [
      'Comprehensive JEE, NEET & CET Test Series',
      'Daily Practice Papers & Regular Mock Tests',
      'Concept-Based Problem Solving & Doubt Support',
    ],
    primaryCta: {
      text: 'Explore Programs',
      to: '/courses',
    },
    secondaryCta: {
      text: 'Apply Now',
      to: '/admission',
    },
    teacher: {
      image: '/images/teachers/teacher-neet.jpg',
      name: 'Medical & Science Mentor',
      role: 'NEET & Board Specialist',
      badge: '🏆 Top Rankers Choice',
      secondaryBadge: 'Comprehensive Mock Tests',
    },
  },
  {
    id: 3,
    badge: 'OM PHOENIX LEARNING ACADEMY',
    badgeAccent: 'CLASSES 6TH - 10TH',
    headingPrefix: 'Build Strong Foundations for a',
    headingHighlight: 'Bright Future',
    headingSuffix: '',
    description:
      'Develop confidence, strengthen concepts, and achieve better results.',
    highlights: [
      'Concept-First Pedagogy & Mental Ability',
      'Olympiad, NTSE & Scholarship Preparation',
      'Small Interactive Batches & Personal Care',
    ],
    primaryCta: {
      text: 'Apply Now',
      to: '/admission',
    },
    secondaryCta: {
      text: 'Explore Courses',
      to: '/courses',
    },
    teacher: {
      image: '/images/teachers/teacher-foundation.jpg',
      name: 'Foundation Specialist',
      role: 'School & Olympiad Faculty',
      badge: '🎯 100% Concept Clarity',
      secondaryBadge: 'Personalized Attention',
    },
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play every 5 seconds, pauses when hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      // Swiped left -> next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (diff < -threshold) {
      // Swiped right -> prev slide
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative overflow-hidden bg-[#781812] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Om Phoenix Academy Hero Banner"
    >
      {/* Background Graphic Elements inspired by reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left deep angled banner ribbon */}
        <div 
          className="absolute -left-12 -top-12 bottom-0 w-32 sm:w-48 md:w-64 bg-[#560e0a] transform -skew-x-12 opacity-90 z-0" 
          aria-hidden="true" 
        />
        <div 
          className="absolute left-16 sm:left-32 md:left-48 -top-12 bottom-0 w-8 bg-[#420a07] transform -skew-x-12 opacity-40 z-0" 
          aria-hidden="true" 
        />

        {/* Main vibrant warm gradient body */}
        <div 
          className="absolute inset-0 z-0 opacity-95"
          style={{
            background: 'linear-gradient(105deg, #781812 0%, #aa2415 22%, #d9480f 50%, #f76707 78%, #e8590c 100%)',
          }}
        />

        {/* Radial warm lighting glows */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[600px] lg:w-[780px] h-[420px] sm:h-[600px] lg:h-[780px] rounded-full bg-gradient-to-br from-amber-400/25 via-yellow-400/15 to-transparent blur-3xl pointer-events-none" 
          aria-hidden="true"
        />
        <div 
          className="absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-orange-400/20 blur-3xl pointer-events-none" 
          aria-hidden="true"
        />

        {/* Subtle geometric grid / dots texture */}
        <div 
          className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" 
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Promotional Content & CTAs
          ========================================================== */}
          <div key={`content-${currentSlide}`} className="lg:col-span-7 text-left text-white space-y-5 sm:space-y-6 animate-hero-fade">
            
            {/* Small Badge / Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#fde047] text-slate-900 text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-md transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-800" />
                {slide.badge}
              </span>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/15 text-yellow-200 text-xs font-semibold backdrop-blur-sm border border-white/20 tracking-wide uppercase">
                {slide.badgeAccent}
              </span>
            </div>

            {/* Main Heading with Accent Highlight */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12]">
              {slide.headingPrefix}{' '}
              <span className="text-[#fde047] inline-block relative drop-shadow-[0_2px_12px_rgba(253,224,71,0.35)]">
                {slide.headingHighlight}
              </span>{' '}
              {slide.headingSuffix}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-orange-50/95 font-normal leading-relaxed max-w-2xl">
              {slide.description}
            </p>

            {/* Three Short Highlights */}
            <div className="space-y-2.5 pt-1">
              {slide.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white/95">
                  <span className="w-5 h-5 rounded-full bg-[#fde047] text-slate-900 flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-sm">
                    ✦
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-3">
              <Link
                to={slide.primaryCta.to}
                className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#fde047] hover:bg-[#facc15] text-slate-950 font-black text-base sm:text-lg shadow-[0_10px_25px_-5px_rgba(253,224,71,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(253,224,71,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>{slide.primaryCta.text}</span>
                <ArrowRight className="ml-2.5 w-5 h-5 transform group-hover:translate-x-1 transition-transform text-slate-950" />
              </Link>

              <Link
                to={slide.secondaryCta.to}
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-base sm:text-lg backdrop-blur-md border border-white/30 hover:border-white/50 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                {slide.secondaryCta.text}
              </Link>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Prominent Teacher / Mentor Image
          ========================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px]">
              
              {/* Backlight Aura Glow */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-amber-400/40 via-yellow-300/30 to-orange-500/20 rounded-3xl blur-2xl transform scale-105 pointer-events-none" 
                aria-hidden="true"
              />

              {/* Main Portrait Frame with Arch Styling */}
              <div 
                key={`teacher-${currentSlide}`}
                className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-white/30 bg-gradient-to-b from-orange-500/20 to-black/40 backdrop-blur-xs animate-hero-fade"
              >
                
                {/* Teacher Image */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-slate-900/40">
                  <img
                    src={slide.teacher.image}
                    alt={slide.teacher.name}
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-[1.02] transition-transform duration-700 ease-out hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Bottom Shadow Gradient for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Teacher Bottom Info Card */}
                  <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white">
                    <p className="text-base sm:text-lg font-extrabold leading-tight tracking-tight text-white flex items-center justify-between">
                      <span>{slide.teacher.name}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </p>
                    <p className="text-xs sm:text-sm text-yellow-300 font-semibold mt-0.5">
                      {slide.teacher.role}
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Trust Badge - Top Left */}
              <div className="absolute -top-3 left-2 sm:-left-5 bg-white text-slate-900 font-extrabold text-[11px] sm:text-xs md:text-sm px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-1.5 sm:gap-2 transform -rotate-2 hover:rotate-0 transition-transform">
                <span className="text-amber-500 text-sm sm:text-base">★</span>
                <span>{slide.teacher.badge}</span>
              </div>

              {/* Floating Trust Badge - Bottom Right */}
              <div className="absolute -bottom-3 right-2 sm:-right-4 bg-[#fde047] text-slate-950 font-black text-[11px] sm:text-xs md:text-sm px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl shadow-xl flex items-center gap-1.5 transform rotate-2 hover:rotate-0 transition-transform">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-800 shrink-0" />
                <span className="truncate">{slide.teacher.secondaryBadge}</span>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================
            SLIDER INDICATORS: Rounded Pill Dash (Reference style)
        ========================================================== */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mt-10 sm:mt-12 lg:mt-14 relative z-20">
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 h-2.5 sm:h-3 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-transparent ${
                  isActive
                    ? 'w-12 sm:w-16 bg-slate-950 shadow-md ring-1 ring-white/20'
                    : 'w-7 sm:w-10 bg-white/45 hover:bg-white/75'
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HeroCarousel;
