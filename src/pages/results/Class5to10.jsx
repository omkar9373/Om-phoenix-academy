import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Medal, 
  Star, 
  GraduationCap, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  Search,
  Filter
} from 'lucide-react';
import { class5to10Toppers, academyStats } from '../../data/resultsData';

const Class5to10 = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredToppers = useMemo(() => {
    return class5to10Toppers.filter((student) => {
      const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (student.tag && student.tag.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (activeFilter === 'all') return true;
      if (activeFilter === 'toppers') return student.scoreNum >= 95;
      if (activeFilter === '90to95') return student.scoreNum >= 90 && student.scoreNum < 95;
      if (activeFilter === 'schoolTopper') return student.tag && student.tag.includes('TOPPER');
      return true;
    });
  }, [activeFilter, searchQuery]);

  // Top 3 for special podium presentation
  const topRankers = class5to10Toppers.slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===================================================
          1. HERO SECTION WITH MARATHI & ENGLISH TITLE
      ==================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071f38] via-[#09355c] to-[#0082d6] text-white py-10 sm:py-14">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#36c5ff]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Banner Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/30 to-red-500/30 border border-amber-300/40 text-amber-300 text-xs sm:text-sm font-black uppercase tracking-widest mb-3 backdrop-blur-md shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>ओम फिनिक्स लर्निंग अकॅडमी</span>
          </div>

          <div className="flex justify-center mb-3">
            <span className="inline-block px-5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 text-white font-extrabold text-sm sm:text-lg tracking-wider shadow-md uppercase border border-amber-300/30">
              ★ STAR OF OM PHOENIX ★
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            Class 5<sup className="text-amber-400 font-bold">th</sup> to 10<sup className="text-amber-400 font-bold">th</sup> Results
          </h1>
          <p className="text-base sm:text-lg text-blue-100 font-medium max-w-3xl mx-auto mb-6">
            CBSE / STATE BOARD / IIT-FOUNDATION Academic Champions
          </p>

          {/* Quick Statistics Strip from Flyer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 text-center">
              <p className="text-2xl sm:text-3xl font-black text-amber-300">99.40%</p>
              <p className="text-xs sm:text-sm text-blue-100 font-semibold mt-0.5">Highest Score (Naitik)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">26+</p>
              <p className="text-xs sm:text-sm text-blue-100 font-semibold mt-0.5">Scored 90%+ Marks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 text-center">
              <p className="text-2xl sm:text-3xl font-black text-emerald-300">100%</p>
              <p className="text-xs sm:text-sm text-blue-100 font-semibold mt-0.5">Batch Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 text-center">
              <p className="text-2xl sm:text-3xl font-black text-amber-300">4+</p>
              <p className="text-xs sm:text-sm text-blue-100 font-semibold mt-0.5">School / City Toppers</p>
            </div>
          </div>

          {/* Direct switcher button to 11th-12th */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-900 font-bold text-xs sm:text-sm shadow-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Viewing: 5th - 10th Foundation &amp; School Results
            </span>
            <Link
              to="/results/class-11th-12th"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/25 transition-all shadow-sm"
            >
              <span>Switch to Class 11th &amp; 12th Science Results</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. TOP PODIUM / LEAD PERFORMERS (NAITIK, SHRUTI, ADWIKA)
      ==================================================== */}
      <section className="py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Hall of Fame
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Top Ranking Achievers
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-1">
            Highest achievers setting benchmarks in CBSE, State Board and Foundation exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* #1 Naitik Mali */}
          <div className="order-1 md:order-2 bg-gradient-to-b from-amber-50 via-white to-amber-50/40 rounded-3xl p-6 sm:p-7 border-2 border-amber-400 shadow-xl shadow-amber-500/10 relative flex flex-col items-center text-center transform md:-translate-y-2">
            <div className="absolute -top-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Medal className="w-4 h-4 text-amber-950" />
              1st Rank • DICS Topper
            </div>

            {/* Avatar / Medal badge */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-3xl font-black text-slate-900 shadow-lg ring-4 ring-amber-200 mt-2 mb-4">
              NM
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Naitik Mali</h3>
            <span className="inline-block mt-1 px-3 py-0.5 rounded-md text-xs font-black bg-rose-600 text-white tracking-wide uppercase">
              DICS TOPPER
            </span>

            <div className="mt-4 my-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md">
              <span className="text-3xl sm:text-4xl font-black tracking-tight">99.40%</span>
            </div>

            <p className="text-xs text-slate-600 font-medium mt-2">
              Exceptional 1st rank performance in Class 10th with record-setting 99.40%
            </p>

            <div className="mt-auto pt-4 w-full border-t border-amber-200/60 flex items-center justify-between text-xs font-bold text-amber-900">
              <span>CBSE / Foundation</span>
              <span className="flex items-center gap-1 text-amber-700">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Star of Academy
              </span>
            </div>
          </div>

          {/* #2 Shruti Daule */}
          <div className="order-2 md:order-1 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-lg relative flex flex-col items-center text-center">
            <div className="absolute -top-3.5 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold text-xs uppercase px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              Modern Topper
            </div>

            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0082d6] to-[#36c5ff] flex items-center justify-center text-2xl font-black text-white shadow-md ring-4 ring-blue-100 mt-2 mb-4">
              SD
            </div>

            <h3 className="text-xl font-black text-slate-900">Shruti Daule</h3>
            <span className="inline-block mt-1 px-3 py-0.5 rounded-md text-xs font-black bg-red-600 text-white uppercase">
              MODERN TOPPER
            </span>

            <div className="mt-4 my-2 px-5 py-2 rounded-2xl bg-red-600 text-white shadow-sm">
              <span className="text-2xl sm:text-3xl font-black">98.20%</span>
            </div>

            <p className="text-xs text-slate-500 mt-2">
              Topper of Modern School with an outstanding 98.20% aggregate
            </p>

            <div className="mt-auto pt-4 w-full border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Class 10th</span>
              <span className="text-primary-600 font-semibold">2nd Highest Score</span>
            </div>
          </div>

          {/* #3 Adwika Dogliya */}
          <div className="order-3 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-lg relative flex flex-col items-center text-center">
            <div className="absolute -top-3.5 bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold text-xs uppercase px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              Top 3 Achiever
            </div>

            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 flex items-center justify-center text-2xl font-black text-white shadow-md ring-4 ring-purple-100 mt-2 mb-4">
              AD
            </div>

            <h3 className="text-xl font-black text-slate-900">Adwika Dogliya</h3>
            <span className="inline-block mt-1 px-3 py-0.5 rounded-md text-xs font-black bg-red-600 text-white uppercase">
              97%+ CLUB
            </span>

            <div className="mt-4 my-2 px-5 py-2 rounded-2xl bg-red-600 text-white shadow-sm">
              <span className="text-2xl sm:text-3xl font-black">97.60%</span>
            </div>

            <p className="text-xs text-slate-500 mt-2">
              Brilliant academic excellence achieving 97.60% overall
            </p>

            <div className="mt-auto pt-4 w-full border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Class 10th</span>
              <span className="text-purple-600 font-semibold">Distinction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. COMPLETE TOPPERS GRID (ALL 26 STUDENTS)
      ==================================================== */}
      <section className="py-8 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                All Class 5th - 10th Stars (90%+ Performers)
              </h2>
              <p className="text-sm text-slate-500">
                Showing {filteredToppers.length} students from the official Om Phoenix merit list
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search student or topper name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Achievers ({class5to10Toppers.length})
            </button>
            <button
              onClick={() => setActiveFilter('toppers')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'toppers'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              95%+ Super Stars ({class5to10Toppers.filter((s) => s.scoreNum >= 95).length})
            </button>
            <button
              onClick={() => setActiveFilter('90to95')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === '90to95'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              90% - 95% Club ({class5to10Toppers.filter((s) => s.scoreNum >= 90 && s.scoreNum < 95).length})
            </button>
            <button
              onClick={() => setActiveFilter('schoolTopper')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'schoolTopper'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              School Toppers Only ({class5to10Toppers.filter((s) => s.tag && s.tag.includes('TOPPER')).length})
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredToppers.map((student, idx) => (
              <div
                key={student.name}
                className={`group rounded-2xl p-3.5 sm:p-4 text-center transition-all duration-300 border flex flex-col items-center justify-between hover:-translate-y-1 hover:shadow-lg ${
                  student.highlight
                    ? 'bg-gradient-to-b from-amber-50/60 to-white border-amber-300 ring-2 ring-amber-100 shadow-sm'
                    : 'bg-white border-slate-200 shadow-xs hover:border-primary-300'
                }`}
              >
                {/* Ranking or index chip */}
                <div className="w-full flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-slate-400">
                    #{idx + 1}
                  </span>
                  {student.tag && (
                    <span
                      className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider ${
                        student.tag.includes('TOPPER')
                          ? 'bg-red-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {student.tag}
                    </span>
                  )}
                </div>

                {/* Avatar Icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-2 shadow-inner ${
                    student.scoreNum >= 95
                      ? 'bg-gradient-to-br from-red-600 to-amber-500 text-white'
                      : 'bg-gradient-to-br from-blue-600 to-sky-400 text-white'
                  }`}
                >
                  {student.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                {/* Student Name */}
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight mb-2 min-h-[32px] flex items-center justify-center">
                  {student.name}
                </h4>

                {/* Percentage Badge matching the red flyer tags */}
                <div className="w-full py-1 px-2 rounded-lg bg-red-600 text-white font-black text-xs sm:text-sm shadow-xs tracking-tight">
                  {student.percentage}
                </div>
              </div>
            ))}
          </div>

          {filteredToppers.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              <p className="font-semibold text-base">No students matched your search criteria.</p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-bold text-primary-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================
          4. WHY CHOOSE OUR 5TH-10TH FOUNDATION PROGRAM?
      ==================================================== */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#004875] to-[#0082d6] rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3">
                Early Foundation Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mb-3">
                Build an Unbeatable Base from Class 5th to 10th
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Our foundation students consistently conquer CBSE and State boards while developing the advanced analytical mindset required for IIT-JEE, NEET, and National Olympiads.
              </p>
              <div className="space-y-2.5 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive coverage of NCERT &amp; Maharashtra State Board syllabus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Early training for Homi Bhabha, MTSE, NTSE &amp; Olympiads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weekly doubt clearing, individual tracking &amp; periodic parent reviews</span>
                </div>
              </div>
            </div>

            {/* Flyer Contact Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <span className="text-amber-300 text-xs font-bold uppercase tracking-widest block mb-1">
                ADMISSION OPEN
              </span>
              <h4 className="text-xl sm:text-2xl font-black mb-2">
                5th to 10th CBSE / State / IIT-Foundation
              </h4>
              <p className="text-xs text-blue-100 mb-5">
                Visit our Moshi Academy campus or speak with our academic counsellors today!
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
                <a
                  href={`tel:${academyStats.phones[0]}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-sm hover:bg-amber-300 transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>{academyStats.phones[0]}</span>
                </a>
                <Link
                  to="/admission"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-primary-800 font-black text-sm hover:bg-slate-100 transition-colors shadow-md"
                >
                  <span>Enrol Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-[11px] text-blue-200 border-t border-white/10 pt-3 flex items-start justify-center gap-1.5 text-left">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-300" />
                <span>{academyStats.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Class5to10;
