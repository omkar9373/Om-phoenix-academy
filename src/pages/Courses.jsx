import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  PhoneCall, 
  HelpCircle,
  Brain,
  FileCheck,
  Users
} from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Programs', count: courses.length },
    { id: 'jee', label: 'JEE (Engineering)', count: 1 },
    { id: 'neet', label: 'NEET (Medical)', count: 1 },
    { id: 'mht-cet', label: 'MHT-CET', count: 1 },
    { id: 'foundation', label: 'Foundation & Olympiad', count: 1 },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(c => c.id === selectedCategory);

  const learningPillars = [
    {
      icon: Brain,
      title: 'Conceptual Clarity',
      desc: 'Deep fundamental understanding taught by experienced senior faculty with simplified real-world problem mapping.',
      accent: 'text-primary-600 bg-primary-50',
    },
    {
      icon: FileCheck,
      title: 'Daily Practice Papers (DPP)',
      desc: 'Graded assignments after every single session to reinforce concepts and develop speed-accuracy mastery.',
      accent: 'text-secondary-600 bg-secondary-50',
    },
    {
      icon: Award,
      title: 'All-India Mock Series',
      desc: 'Simulated examination conditions, detailed percentile benchmarking, and question-level error analysis.',
      accent: 'text-emerald-600 bg-emerald-50',
    },
    {
      icon: Users,
      title: '1-on-1 Faculty Mentorship',
      desc: 'Dedicated daily doubt-solving counters, weekly personal tracking, and regular parent-teacher academic reviews.',
      accent: 'text-purple-600 bg-purple-50',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===================================================
          1. ACADEMY HERO BANNER
      ==================================================== */}
      <section className="relative py-8 sm:py-10 bg-gradient-to-br from-[#0a1f35] via-[#0d2a48] to-[#168bd1] text-white overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5e00]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#168bd1]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold tracking-wider uppercase mb-3 border border-white/15 animate-float">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Excellence & Structured Coaching</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Our Academic Programs
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3" />

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed mb-6">
            Proven coaching tracks designed for IIT-JEE, NEET, MHT-CET, and Early Foundation in Moshi, Pune. Empowering students with top-rank strategies and personal mentoring.
          </p>

          {/* Key Quick Badges */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 text-xs font-semibold text-slate-100">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Expert Senior Faculty
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Daily DPPs &amp; Doubt Counters
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Up to 100% M-CET Scholarships
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. FILTER TABS & COURSE CARDS
      ==================================================== */}
      <section className="py-6 sm:py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {categories.map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] text-white shadow-md shadow-orange-500/25 scale-102'
                      : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-100 hover:text-primary-600'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      active ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Courses Grid with Equal Height Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          3. OUR LEARNING METHODOLOGY / 4 PILLARS
      ==================================================== */}
      <section className="py-6 sm:py-8 bg-white border-y border-slate-200/70">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="inline-block py-1 px-3.5 rounded-full bg-[#e8f5fc] text-[#168bd1] text-xs font-bold tracking-wider uppercase mb-2 border border-[#168bd1]/20">
              The Om Phoenix Edge
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f35] tracking-tight mb-2">
              Our Academic Learning Ecosystem
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-[#e11d48] mx-auto rounded-full mb-3" />
            <p className="text-xs sm:text-sm text-slate-600">
              Every course is powered by our 4-stage systematic preparation framework that transforms preparation into consistent top results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningPillars.map((pillar, index) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-primary-300 hover:bg-white hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 ease-out ${pillar.accent}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0a1f35] mb-1.5">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-primary-600">
                    <span>Phase 0{index + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          4. COUNSELING & ADMISSION CTA
      ==================================================== */}
      <section className="py-6 sm:py-8 bg-slate-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0a1f35] via-[#0d2a48] to-[#168bd1] text-white p-5 sm:p-7 relative overflow-hidden shadow-lg border border-white/10">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
              <div className="max-w-xl">
                <span className="inline-block py-0.5 px-3 rounded-full bg-white/15 text-amber-300 text-[11px] font-bold tracking-wider uppercase mb-2">
                  Need Help Choosing?
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  Unsure Which Course is Right for You?
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Book a free 1-on-1 career consultation with our senior academic mentors. We will evaluate your current syllabus and guide you to the ideal batch.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full sm:w-auto">
                <Link
                  to="/admission"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ffb800] via-[#ff5e00] to-[#e11d48] hover:from-[#f59e0b] hover:via-[#ea580c] hover:to-[#dc2626] text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-orange-500/30 hover:scale-102"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors"
                >
                  <PhoneCall className="mr-1.5 w-3.5 h-3.5" />
                  <span>Talk to Counselor</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
