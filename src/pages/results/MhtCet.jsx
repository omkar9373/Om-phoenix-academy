import { Link } from 'react-router-dom';
import { 
  Building2, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Trophy 
} from 'lucide-react';
import { starVedika, starAllRounder, academyStats } from '../../data/resultsData';

const MhtCet = () => {
  const cetAchievers = [
    {
      name: 'Vedika Bansode',
      percentile: '99.60 %ile',
      college: 'COEP COMPUTER BRANCH',
      image: starVedika.image,
      highlight: 'COEP Technological University',
      rankTag: '99.60%ile Topper',
    },
    {
      name: 'Jaykumar Kale',
      percentile: '99.33 %ile',
      college: 'PICT COMPUTER BRANCH',
      highlight: 'Pune Institute of Computer Technology',
      rankTag: '99.33%ile PICT',
    },
    {
      name: 'Aniket Kundgir',
      percentile: '99.31 %ile',
      college: 'TOP ENGINEERING / MEDICAL',
      image: starAllRounder.image,
      highlight: 'Multi-Exam Super Topper',
      rankTag: '99.31%ile',
    },
    {
      name: 'Abhishek Takale',
      percentile: '98.60 %ile',
      college: 'PREMIER ENGINEERING',
      highlight: 'Top Maharashtra Engineering Admission',
      rankTag: '98.60%ile',
    },
    {
      name: 'Sarthak Kendre',
      percentile: '98.50 %ile',
      college: 'PREMIER ENGINEERING',
      highlight: 'Top Maharashtra Engineering Admission',
      rankTag: '98.50%ile',
    },
    {
      name: 'Chaya Pawar',
      percentile: 'Top Rank Qualified',
      college: 'COEP COLLEGE',
      highlight: 'COEP Engineering Admission',
      rankTag: 'COEP College',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section
        className="relative py-10 sm:py-14 overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #071f38 0%, #0067ab 50%, #00a8ff 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-3 text-xs font-black uppercase tracking-widest rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-md">
            MHT-CET Results • 11th - 12th Science
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
            MHT-CET Engineering Results
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-6">
            Leading engineering admissions into COEP, PICT, VJTI, and top Maharashtra institutes.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
              <p className="text-2xl sm:text-3xl font-black text-amber-300">99.60 %ile</p>
              <p className="text-xs text-blue-100 mt-1 font-semibold">Top Score (Vedika)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
              <p className="text-2xl sm:text-3xl font-black text-white">COEP &amp; PICT</p>
              <p className="text-xs text-blue-100 mt-1 font-semibold">Computer Branch Admits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
              <p className="text-2xl sm:text-3xl font-black text-emerald-300">12,000+</p>
              <p className="text-xs text-blue-100 mt-1 font-semibold">Engineers Trained</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
              <p className="text-2xl sm:text-3xl font-black text-amber-300">98%+ Club</p>
              <p className="text-xs text-blue-100 mt-1 font-semibold">Consistent Percentiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievers Grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-black text-primary-600 uppercase tracking-widest bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
            Merit List
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Top MHT-CET Achievers
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-1">
            Proud students of Om Phoenix Learning Academy who made it to Maharashtra&apos;s apex engineering colleges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cetAchievers.map((topper) => (
            <div
              key={topper.name}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-400 hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center justify-between"
            >
              <div className="w-full flex justify-between items-center mb-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider bg-red-600 text-white">
                  {topper.college}
                </span>
                <span className="text-xs font-bold text-slate-400">Class 12th</span>
              </div>

              {topper.image ? (
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary-500 shadow-md my-3">
                  <img src={topper.image} alt={topper.name} className="w-full h-full object-cover object-top" />
                </div>
              ) : (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white my-3 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #0082d6, #36c5ff)' }}
                >
                  {topper.name.charAt(0)}
                </div>
              )}

              <h3 className="text-lg font-black text-slate-900">{topper.name}</h3>
              <span className="mt-1 px-3.5 py-1 text-sm font-black rounded-full bg-red-600 text-white shadow-xs">
                {topper.percentile}
              </span>

              <p className="text-xs text-slate-500 mt-2">{topper.highlight}</p>

              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-between text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Admitted
                </span>
                <span className="text-primary-600">{topper.rankTag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Targeting Top Colleges like COEP &amp; PICT?
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Join our dedicated MHT-CET batches with chapter-wise shortcut tricks, timed mock drills and senior faculty mentorship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admission" className="btn-flame text-sm py-3 px-8">
              Enrol for 11th - 12th Science
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

export default MhtCet;
