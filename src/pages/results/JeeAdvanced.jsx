import { Link } from 'react-router-dom';
import { Trophy, CheckCircle2, ArrowRight } from 'lucide-react';
import aniketImg from '../../assets/aniket.jpeg';
import vedikaImg from '../../assets/vedika.jpeg';
import { academyStats } from '../../data/resultsData';

const JeeAdvanced = () => {
  const qualifiers = [
    { name: 'Aniket Kundgir', rank: '99.55 %ile', stream: 'IIT-JEE & CET Multi-Topper', image: aniketImg, college: 'Top Engineering & Medical Qualify' },
    { name: 'Vedika Bansode', rank: 'IISER Qualified', stream: 'JEE & CET 99.60%ile', image: vedikaImg, college: 'COEP Computer Branch & IISER' },
    { name: 'Saurabh Pawar', rank: '95.00 %ile', stream: 'JEE - NATA', college: 'Apex Architecture / Tech' },
    { name: 'Tejas Padalkar', rank: '94.00 %ile', stream: 'JEE - NATA', college: 'Apex Architecture / Tech' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section
        className="relative py-10 sm:py-14 overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #004875 0%, #0082d6 50%, #36c5ff 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-3 text-xs font-black uppercase tracking-widest rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-md">
            Results • 11th &amp; 12th Science
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
            JEE Advanced &amp; Premier Institutes
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-6">
            Consistent selections into IITs, NITs, IISER, and top national institutes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
              <p className="text-3xl font-black text-white">{academyStats.jeeNitSelections}</p>
              <p className="text-xs text-blue-100 mt-1 font-semibold">JEE-IIT / NIT Selections</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
              <p className="text-3xl font-black text-amber-300">IISER</p>
              <p className="text-xs text-blue-100 mt-1 font-semibold">National Qualified</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 col-span-2 sm:col-span-1">
              <p className="text-3xl font-black text-white">99.55%ile</p>
              <p className="text-xs text-blue-100 mt-1 font-semibold">Top Percentile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">National Qualifiers</h2>
          <p className="text-sm text-slate-500 mt-1">
            Proud students of Om Phoenix Learning Academy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {qualifiers.map((topper) => (
            <div
              key={topper.name}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-400 hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col items-center text-center justify-between"
            >
              {topper.image ? (
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary-500 shadow-md my-2">
                  <img src={topper.image} alt={topper.name} className="w-full h-full object-cover object-top" />
                </div>
              ) : (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black text-white my-2 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #0082d6, #36c5ff)' }}
                >
                  {topper.name.charAt(0)}
                </div>
              )}

              <h3 className="text-base font-black text-slate-900 mt-1">{topper.name}</h3>
              <span className="mt-1 px-3 py-1 text-sm font-black rounded-full bg-red-600 text-white shadow-xs">
                {topper.rank}
              </span>
              <p className="text-xs text-slate-500 mt-2">{topper.stream}</p>

              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center text-xs font-bold text-emerald-600 gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {topper.college}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Targeting India&apos;s Premier Engineering Institutes?
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Get structured mentorship and battle-tested preparation for JEE Advanced.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admission" className="btn-flame text-sm py-3 px-8">
              Enrol Today
            </Link>
            <Link
              to="/results/class-11th-12th"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold transition-colors"
            >
              <span>View All 11th &amp; 12th Results</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JeeAdvanced;
