import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Stethoscope, 
  Shield, 
  BookOpen, 
  GraduationCap, 
  Phone, 
  MapPin,
  Flame,
  Star
} from 'lucide-react';
import { 
  starAllRounder, 
  starVedika, 
  class11to12Achievers, 
  academyStats 
} from '../../data/resultsData';

const Class11to12 = () => {
  const [filter, setFilter] = useState('all');

  const filteredAchievers = class11to12Achievers.filter((student) => {
    if (filter === 'all') return true;
    if (filter === 'engineering') return student.category === 'engineering' || student.category === 'all-rounder';
    if (filter === 'medical') return student.category === 'medical' || student.category === 'medical-nda' || student.category === 'all-rounder';
    if (filter === 'cet') return student.examBadges.some(b => b.name === 'MHT-CET');
    if (filter === 'jee') return student.examBadges.some(b => b.name.includes('JEE'));
    if (filter === 'medical-only') return student.category === 'medical' || student.category === 'medical-nda';
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===================================================
          1. HERO HEADER WITH STATS & BRANDING
      ==================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#06182c] via-[#0b2847] to-[#006bb3] text-white py-10 sm:py-14">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#00a8ff]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Marathi title badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/30 to-red-500/30 border border-amber-300/40 text-amber-300 text-xs sm:text-sm font-black uppercase tracking-widest mb-3 backdrop-blur-md shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>ओम फिनिक्स लर्निंग अकॅडमी</span>
          </div>

          <div className="flex justify-center mb-3">
            <span className="inline-block px-5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 text-white font-extrabold text-sm sm:text-lg tracking-wider shadow-md uppercase border border-amber-300/30">
              ★ STAR OF OM PHOENIX ★
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
            11<sup className="text-amber-400">th</sup> to 12<sup className="text-amber-400">th</sup> Science Results
          </h1>
          <p className="text-base sm:text-lg text-amber-200 font-bold uppercase tracking-wider mb-2">
            IIT-JEE | NEET | MHT-CET | NDA
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-6">
            INTEGRATED BATCH • REGULAR BATCH • COLLEGE TIE-UPS • DEDICATED COACHING
          </p>

          {/* Core Selection Stats from Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-gradient-to-b from-amber-500/20 to-amber-600/30 border border-amber-400/40 backdrop-blur-md rounded-2xl p-4 text-center shadow-lg">
              <p className="text-3xl sm:text-4xl font-black text-amber-300">
                {academyStats.jeeNitSelections}
              </p>
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mt-1">
                JEE-IIT / NIT Selections
              </p>
            </div>
            <div className="bg-gradient-to-b from-emerald-500/20 to-emerald-600/30 border border-emerald-400/40 backdrop-blur-md rounded-2xl p-4 text-center shadow-lg">
              <p className="text-3xl sm:text-4xl font-black text-emerald-300">
                {academyStats.doctorsProduced}
              </p>
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mt-1">
                Doctors Qualified
              </p>
            </div>
            <div className="bg-gradient-to-b from-blue-500/20 to-blue-600/30 border border-blue-400/40 backdrop-blur-md rounded-2xl p-4 text-center shadow-lg">
              <p className="text-3xl sm:text-4xl font-black text-sky-300">
                {academyStats.engineersProduced}
              </p>
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mt-1">
                Engineers Shaped
              </p>
            </div>
          </div>

          {/* Quick Switch to 5th-10th */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-900 font-bold text-xs sm:text-sm shadow-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Viewing: 11th - 12th Science &amp; Entrance Exams
            </span>
            <Link
              to="/results/class-5th-10th"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/25 transition-all shadow-sm"
            >
              <span>Switch to Class 5th to 10th Results</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          2. FEATURED SUPERSTARS (ANIKET KUNDGIR & VEDIKA BANSODE)
      ==================================================== */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-black uppercase tracking-wider mb-2 border border-red-200">
            <Flame className="w-4 h-4 text-red-600" />
            Top Star of Om Phoenix
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Star Performers of 11th &amp; 12th Science
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-1">
            Phenomenal multi-stream qualifications in JEE, CET, NEET &amp; Top Engineering/Medical colleges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* STAR #1: ANIKET KUNDGIR (Large Feature Card) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0c233c] to-[#004875] rounded-3xl p-6 sm:p-8 text-white border-2 border-amber-400/50 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Top badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs uppercase shadow-md flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                STAR OF OM PHOENIX
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-500 text-white font-black text-xs uppercase tracking-wide">
                MBBS QUALIFY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Photo */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative group">
                  <div className="w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-4 border-amber-400/80 shadow-2xl bg-slate-800">
                    <img
                      src={starAllRounder.image}
                      alt="Aniket Kundgir"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-red-600 text-white font-black text-[11px] px-3 py-0.5 rounded-full shadow-md whitespace-nowrap uppercase">
                    All-Round Topper
                  </div>
                </div>
              </div>

              {/* Student Details & Scores */}
              <div className="sm:col-span-7 text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  ANIKET KUNDGIR
                </h3>
                <p className="text-xs sm:text-sm text-amber-300 font-bold mt-1">
                  Remarkable multi-exam benchmark setter
                </p>

                {/* Score Badges exactly from Image 2 */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mt-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15">
                    <span className="text-[10px] text-blue-200 block font-semibold uppercase">JEE Percentile</span>
                    <span className="text-base sm:text-lg font-black text-white">99.55 %ile</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15">
                    <span className="text-[10px] text-blue-200 block font-semibold uppercase">CET Percentile</span>
                    <span className="text-base sm:text-lg font-black text-amber-300">99.31 %ile</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15">
                    <span className="text-[10px] text-blue-200 block font-semibold uppercase">NEET Score</span>
                    <span className="text-base sm:text-lg font-black text-emerald-300">518 Marks</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/15">
                    <span className="text-[10px] text-blue-200 block font-semibold uppercase">NDA National Rank</span>
                    <span className="text-base sm:text-lg font-black text-purple-300">AIR 802</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 text-xs text-blue-200 flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold">Integrated Batch • Science Stream</span>
              <span className="text-amber-300 font-bold">Qualified For Both Top Engineering &amp; Medical</span>
            </div>
          </div>

          {/* STAR #2: VEDIKA BANSODE (COEP Computer Branch) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl flex flex-col justify-between relative">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white font-black text-[11px] uppercase tracking-wider shadow-xs">
                COEP COMPUTER BRANCH
              </span>
              <span className="text-xs font-bold text-slate-500">CET: 99.60 %ile</span>
            </div>

            <div className="flex items-center gap-4 my-2">
              <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-red-500 shadow-lg shrink-0 bg-slate-100">
                <img
                  src={starVedika.image}
                  alt="Vedika Bansode"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  VEDIKA BANSODE
                </h3>
                <span className="inline-block mt-1 text-xs font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  COEP PUNE ADMITTED
                </span>
                <p className="text-xs text-slate-500 mt-1.5 font-medium">
                  Qualified premier IISER and secured COEP Computer Engineering seat
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="bg-slate-50 rounded-xl p-2 border border-slate-100">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">MHT-CET</span>
                <span className="text-sm sm:text-base font-black text-slate-900">99.60%ile</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-2 border border-slate-100">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">JEE Main</span>
                <span className="text-sm sm:text-base font-black text-slate-900">98.00%ile</span>
              </div>
              <div className="bg-emerald-50 rounded-xl p-2 border border-emerald-100">
                <span className="text-[10px] text-emerald-700 block font-semibold uppercase">IISER</span>
                <span className="text-sm sm:text-base font-black text-emerald-700">Qualified</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Engineering Star</span>
              <span className="text-primary-600">PICT / COEP Tier</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3. CATEGORIZED ACHIEVERS GRID
      ==================================================== */}
      <section className="py-8 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Medical &amp; Engineering Qualifiers
              </h2>
              <p className="text-sm text-slate-500">
                All high scorers and college admitted students from 11th - 12th Science batch
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Stars ({class11to12Achievers.length})
              </button>
              <button
                onClick={() => setFilter('cet')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === 'cet'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                MHT-CET Toppers
              </button>
              <button
                onClick={() => setFilter('medical-only')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === 'medical-only'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                MBBS &amp; BDS Doctors
              </button>
              <button
                onClick={() => setFilter('jee')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  filter === 'jee'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                JEE &amp; Architecture
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredAchievers.map((student) => {
              const isMedical = student.category === 'medical' || student.category === 'medical-nda';
              const isEngineering = student.category === 'engineering' || student.category === 'all-rounder';

              return (
                <div
                  key={student.name}
                  className="group bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-400 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Tag */}
                    <div className="flex items-center justify-between mb-3">
                      {student.college ? (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider bg-red-600 text-white shadow-xs">
                          {student.college}
                        </span>
                      ) : isMedical ? (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider bg-emerald-600 text-white shadow-xs flex items-center gap-1">
                          <Stethoscope className="w-3 h-3" /> {student.examBadges[0].score}
                        </span>
                      ) : (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                          {student.examBadges[0].name}
                        </span>
                      )}

                      {student.isTopStar && (
                        <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          ★ Star
                        </span>
                      )}
                    </div>

                    {/* Avatar / Photo */}
                    <div className="flex items-center gap-3 mb-3">
                      {student.image ? (
                        <img
                          src={student.image}
                          alt={student.name}
                          className="w-12 h-12 rounded-xl object-cover object-top border-2 border-primary-500 shadow-xs shrink-0"
                        />
                      ) : (
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm text-white shrink-0 shadow-xs ${
                            isMedical
                              ? 'bg-gradient-to-br from-emerald-600 to-teal-500'
                              : 'bg-gradient-to-br from-[#0082d6] to-[#36c5ff]'
                          }`}
                        >
                          {student.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                      )}

                      <div>
                        <h4 className="text-base font-black text-slate-900 leading-tight">
                          {student.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {student.selection || 'Om Phoenix Learning Academy'}
                        </p>
                      </div>
                    </div>

                    {/* Exam Score Badges */}
                    <div className="space-y-1.5 my-3">
                      {student.examBadges.map((badge, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100"
                        >
                          <span className="font-semibold text-slate-600">{badge.name}</span>
                          <span className="font-black text-slate-900">{badge.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500 flex items-center justify-between">
                    <span>{student.highlight}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          4. ADMISSION BANNER FOR 11TH-12TH SCIENCE
      ==================================================== */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#071f38] via-[#004875] to-[#0082d6] rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3">
                INTEGRATED &amp; REGULAR BATCHES
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mb-3">
                Join Om Phoenix 11th - 12th Science Program
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Complete synchronization between Board syllabus, JEE Mains/Advanced, NEET, and MHT-CET under senior faculty mentors.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>IIT-JEE (Mains &amp; Adv)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>NEET-UG Medical</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>MHT-CET Top Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>NDA Defence Training</span>
                </div>
              </div>
            </div>

            {/* Contact / Enrol Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <span className="text-amber-300 text-xs font-bold uppercase tracking-widest block mb-1">
                ADMISSION OPEN
              </span>
              <h4 className="text-xl sm:text-2xl font-black mb-2">
                11th &amp; 12th Science Coaching
              </h4>
              <p className="text-xs text-blue-100 mb-5">
                Special integrated batches with college tie-ups for Moshi, Pune students
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
                  <span>Apply Now</span>
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

export default Class11to12;
