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

import aniketImg from '../assets/aniket.jpeg';
import vedikaImg from '../assets/vedika.jpeg';
import harshadaImg from '../assets/harshada.jpeg';

const slides = [
  {
    id: 1,
    badge: 'OM PHOENIX LEARNING ACADEMY',
    badgeAccent: 'IIT-JEE (MAIN + ADV.) • MHT-CET',
    headingPrefix: 'Crack IIT-JEE with',
    headingHighlight: 'Top AIR Ranks',
    headingSuffix: '& Top Colleges',
    description:
      'Kota-pattern pedagogy, rigorous concept mastery, daily practice problem sheets (DPPs), and personalized 1-on-1 mentoring by expert faculty in Moshi, Pune.',
    highlights: [
      'All-India Level Test Series with Analytical Error Tracking',
      'Daily Dedicated Doubt Resolution & Step-by-Step Mentoring',
      'Comprehensive Printed Modules, NCERT Punch & 15-Yr Solved PYQs',
    ],
    primaryCta: {
      text: 'Explore JEE Batches',
      to: '/courses/jee',
    },
    secondaryCta: {
      text: 'Apply for Admission',
      to: '/admission',
    },
    teacher: {
      image: aniketImg,
      name: 'Prof. Aniket Sir',
      role: 'Senior IIT-JEE Mathematics Faculty',
      badge: '99.55+ Percentile Record',
      secondaryBadge: '10+ Years Mentorship',
    },
  },
  {
    id: 2,
    badge: 'OM PHOENIX LEARNING ACADEMY',
    badgeAccent: 'NEET-UG MEDICAL 2026-27',
    headingPrefix: 'Secure Your Dream',
    headingHighlight: 'Govt. MBBS Seat',
    headingSuffix: 'with Top Scores',
    description:
      'Focused Biology, Chemistry & Physics coaching with 100% line-by-line NCERT coverage, high-yield speed drills, and full-length 720-mark OMR simulation exams.',
    highlights: [
      '100% NCERT-Aligned Test Series with Real OMR Simulation',
      'High-Yield Medical Question Banks & Speed-Accuracy Drills',
      'Personal Mentorship by Senior Doctors & Science Experts',
    ],
    primaryCta: {
      text: 'Explore NEET Batches',
      to: '/courses/neet',
    },
    secondaryCta: {
      text: 'Book Free Counseling',
      to: '/contact',
    },
    teacher: {
      image: vedikaImg,
      name: 'Prof. Vedika Ma\'am',
      role: 'Senior NEET Biology & Science Faculty',
      badge: '685/720 Top NEET Score',
      secondaryBadge: '100% NCERT Mastery',
    },
  },
  {
    id: 3,
    badge: 'OM PHOENIX LEARNING ACADEMY',
    badgeAccent: 'M-CET SCHOLARSHIP 2026-27',
    headingPrefix: 'Win Up to 100% Scholarship via',
    headingHighlight: 'M-CET Talent Exam',
    headingSuffix: '',
    description:
      'Appear for the Phoenix Scholarship Aptitude Test. Build unbeatable foundations in Mathematics & Science for Olympiads, NTSE, Homi Bhabha & School Board Exams.',
    highlights: [
      'Up to 100% Tuition Fee Concessions for Meritorious Students',
      'Concept-First Pedagogy for Olympiads, NTSE & School Boards',
      'Small Interactive Batches (Max 30) with Individual Mentorship',
    ],
    primaryCta: {
      text: 'Register for M-CET',
      to: '/scholarships/m-cet',
    },
    secondaryCta: {
      text: 'Explore Scholarships',
      to: '/scholarships/explorescholarships',
    },
    teacher: {
      image: harshadaImg,
      name: 'Mrs. Harshada Ma\'am',
      role: 'Academic Director & Foundation Head',
      badge: 'Up to 100% Fee Waiver',
      secondaryBadge: 'Classes 5th to 12th',
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
      className="relative overflow-hidden bg-[#071f38] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Om Phoenix Academy Hero Banner"
    >
      {/* Background Graphic Elements inspired by the Phoenix Academy Logo Icon */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left deep angled banner ribbon in navy */}
        <div
          className="absolute -left-12 -top-12 bottom-0 w-32 sm:w-48 md:w-64 bg-[#05162b] transform -skew-x-12 opacity-90 z-0"
          aria-hidden="true"
        />
        <div
          className="absolute left-16 sm:left-32 md:left-48 -top-12 bottom-0 w-8 bg-[#00a8ff]/25 transform -skew-x-12 opacity-40 z-0"
          aria-hidden="true"
        />

        {/* Main vibrant Phoenix gradient: Deep Navy -> Electric Cyan/Blue -> Fiery Phoenix Flame */}
        <div
          className="absolute inset-0 z-0 opacity-95"
          style={{
            background: 'linear-gradient(110deg, #071f38 0%, #0a2540 22%, #0067ab 45%, #ff5e00 80%, #dc2626 100%)',
          }}
        />

        {/* Radial warm lighting & cyan glows */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[600px] lg:w-[780px] h-[420px] sm:h-[600px] lg:h-[780px] rounded-full bg-gradient-to-br from-amber-400/25 via-orange-500/20 to-transparent blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#00a8ff]/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle geometric grid / dots texture */}
        <div
          className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* =========================================================
              LEFT COLUMN: Promotional Content & CTAs
          ========================================================== */}
          <div key={`content-${currentSlide}`} className="lg:col-span-7 text-left text-white space-y-5 sm:space-y-6 animate-hero-fade">

            {/* Small Badge / Tag */}
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#ffb800] text-slate-950 text-xs sm:text-sm font-black tracking-wider uppercase shadow-md transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-slate-900" />
                {slide.badge}
              </span>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 tracking-wide uppercase">
                {slide.badgeAccent}
              </span>
            </div>

            {/* Main Heading with Accent Highlight */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.12]">
              {slide.headingPrefix}{' '}
              <span className="text-[#ffd166] inline-block relative drop-shadow-[0_2px_12px_rgba(255,209,102,0.35)]">
                {slide.headingHighlight}
              </span>{' '}
              {slide.headingSuffix}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-2xl">
              {slide.description}
            </p>

            {/* Three Short Highlights */}
            <div className="space-y-2.5 pt-1">
              {slide.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white/95">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#ffb800] to-[#ff5e00] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-xs">
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
                className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] hover:from-[#f59e0b] hover:via-[#ea580c] hover:to-[#dc2626] text-white font-extrabold text-base sm:text-lg shadow-[0_10px_25px_-5px_rgba(255,94,0,0.55)] hover:shadow-[0_15px_30px_-5px_rgba(255,94,0,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>{slide.primaryCta.text}</span>
                <ArrowRight className="ml-2.5 w-5 h-5 transform group-hover:translate-x-1 transition-transform text-white" />
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
                className="absolute inset-0 bg-gradient-to-tr from-primary-400/35 via-amber-400/25 to-orange-500/25 rounded-3xl blur-2xl transform scale-105 pointer-events-none"
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
                  {/* Subtle Bottom Shadow Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

              {/* Floating Trust Badge - Top Left */}
              <div className="absolute -top-3 left-2 sm:-left-5 bg-white text-slate-900 font-extrabold text-[11px] sm:text-xs md:text-sm px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-1.5 sm:gap-2 transform -rotate-2 hover:rotate-0 transition-transform">
                <span className="text-amber-500 text-sm sm:text-base">★</span>
                <span>{slide.teacher.badge}</span>
              </div>

              {/* Floating Trust Badge - Bottom Right */}
              <div className="absolute -bottom-3 right-2 sm:-right-4 bg-gradient-to-r from-[#ffb800] to-[#ff5e00] text-slate-950 font-black text-[11px] sm:text-xs md:text-sm px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl shadow-xl flex items-center gap-1.5 transform rotate-2 hover:rotate-0 transition-transform">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-800 shrink-0" />
                <span className="truncate">{slide.teacher.secondaryBadge}</span>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================
            SLIDER INDICATORS & CONTROLS
        ========================================================== */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12 lg:mt-14 relative z-20">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 border border-white/20 cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {slides.map((_, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 h-2.5 sm:h-3 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-transparent ${isActive
                      ? 'w-12 sm:w-16 bg-[#071f38] border-2 border-[#ffb800] shadow-lg shadow-amber-500/20'
                      : 'w-7 sm:w-10 bg-white/40 hover:bg-white/70'
                    }`}
                />
              );
            })}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            aria-label="Next slide"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 border border-white/20 cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroCarousel;
