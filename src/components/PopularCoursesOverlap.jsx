import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Play,
  Award,
  BookOpen,
  Trophy,
  Users,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const popularCourses = [
  {
    id: 'jee',
    title: '2-Year JEE',
    subtitle: 'Main & Advanced',
    to: '/courses/jee',
    bgClass: 'bg-[#ede9fe] hover:bg-[#e0d7fe] border-[#ddd6fe]',
    iconBgClass: 'bg-[#ddd6fe] text-[#7c3aed]',
    textColor: 'text-[#4c1d95]',
    icon: Clock,
  },
  {
    id: 'neet',
    title: '2-Year NEET',
    subtitle: 'Medical UG',
    to: '/courses/neet',
    bgClass: 'bg-[#fef3c7] hover:bg-[#feeaa0] border-[#fde68a]',
    iconBgClass: 'bg-[#fde68a] text-[#d97706]',
    textColor: 'text-[#78350f]',
    icon: Play,
  },
  {
    id: 'mht-cet',
    title: 'MHT-CET',
    subtitle: 'State Board & CET',
    to: '/courses/mht-cet',
    bgClass: 'bg-[#d1fae5] hover:bg-[#bbf7d0] border-[#a7f3d0]',
    iconBgClass: 'bg-[#a7f3d0] text-[#059669]',
    textColor: 'text-[#064e3b]',
    icon: Award,
  },
  {
    id: 'foundation',
    title: 'Foundation',
    subtitle: 'Class 5th - 10th',
    to: '/courses/foundation',
    bgClass: 'bg-[#fce7f3] hover:bg-[#fbcfe8] border-[#fbcfe8]',
    iconBgClass: 'bg-[#fbcfe8] text-[#db2777]',
    textColor: 'text-[#831843]',
    icon: BookOpen,
  },
  {
    id: 'olympiad',
    title: 'Olympiad',
    subtitle: 'Early Excellence',
    to: '/scholarships/om-phoenix-olympiad',
    bgClass: 'bg-[#ffedd5] hover:bg-[#fed7aa] border-[#fed7aa]',
    iconBgClass: 'bg-[#fed7aa] text-[#ea580c]',
    textColor: 'text-[#7c2d12]',
    icon: Trophy,
  },
  {
    id: 'one-to-one',
    title: 'One to One',
    subtitle: 'Personal Mentorship',
    to: '/contact',
    bgClass: 'bg-[#dbeafe] hover:bg-[#bfdbfe] border-[#bfdbfe]',
    iconBgClass: 'bg-[#bfdbfe] text-[#2563eb]',
    textColor: 'text-[#1e3a8a]',
    icon: Users,
  },
];

const PopularCoursesOverlap = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 260;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="-mt-14 sm:-mt-16 md:-mt-20 lg:-mt-22 relative z-20 w-full px-4 sm:px-6 lg:px-8 mb-0"
      aria-label="Popular Courses Navigation"
    >
      {/* White Overlapping Container */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 md:p-8 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] border border-slate-100">

        {/* Top Header Badge */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <div className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#ffb800] to-[#ff5e00] text-slate-950 font-black text-sm sm:text-base tracking-wide shadow-xs">
            <span>Popular Courses</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Explore Programs
            </span>
          </div>
        </div>

        {/* Courses Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth py-1 px-0.5 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {popularCourses.map((course) => {
            const Icon = course.icon;
            return (
              <Link
                key={course.id}
                to={course.to}
                className={`flex-1 min-w-[155px] sm:min-w-[170px] lg:min-w-0 rounded-2xl p-4 sm:p-4.5 border transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between group cursor-pointer ${course.bgClass}`}
              >
                {/* Course Icon */}
                <div className="mb-4">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${course.iconBgClass}`}
                  >
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                  </div>
                </div>

                {/* Title and Arrow Row */}
                <div className="flex items-end justify-between gap-1">
                  <div>
                    <h3
                      className={`text-sm sm:text-[15px] font-extrabold leading-snug tracking-tight ${course.textColor}`}
                    >
                      {course.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium line-clamp-1 mt-0.5">
                      {course.subtitle}
                    </p>
                  </div>

                  <div className={`p-1 rounded-full text-slate-500 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Navigation Arrow Buttons (matches reference screenshot footer arrows) */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`p-1.5 sm:p-2 rounded-lg transition-all ${canScrollLeft
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer'
                : 'text-slate-300 cursor-not-allowed opacity-40'
              }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="text-[11px] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase">
            Click any course to view curriculum & admission details
          </div>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`p-1.5 sm:p-2 rounded-lg transition-all ${canScrollRight
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer'
                : 'text-slate-300 cursor-not-allowed opacity-40'
              }`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PopularCoursesOverlap;
