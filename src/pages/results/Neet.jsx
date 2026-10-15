import { Link } from 'react-router-dom';
import { Stethoscope, CheckCircle2, ArrowRight, Award, Shield } from 'lucide-react';
import aniketImg from '../../assets/aniket.jpeg';

const Neet = () => {
  const medicalAchievers = [
    { name: 'Mahadevi Honrao', score: '598 Marks', selection: 'NEET Qualified + NDA', course: 'MBBS / Defence Medical', tag: 'NEET 598 + NDA' },
    { name: 'Aniket Kundgir', score: '518 Marks', selection: 'MBBS Qualify', course: 'MBBS Doctor', tag: 'MBBS Qualified', image: aniketImg },
    { name: 'Pooja Bhangale', score: 'NEET Qualified', selection: 'MBBS Selection', course: 'MBBS Doctor', tag: 'MBBS' },
    { name: 'Kedar Ajay', score: 'NEET Qualified', selection: 'MBBS Selection', course: 'MBBS Doctor', tag: 'MBBS' },
    { name: 'Kedar Amol', score: 'NEET Qualified', selection: 'MBBS Selection', course: 'MBBS Doctor', tag: 'MBBS' },
    { name: 'Tushar Dhound', score: 'NEET Qualified', selection: 'MBBS Selection', course: 'MBBS Doctor', tag: 'MBBS' },
    { name: 'Samadhan Murkute', score: 'NEET Qualified', selection: 'MBBS Selection', course: 'MBBS Doctor', tag: 'MBBS' },
    { name: 'Monika Power', score: 'NEET Qualified', selection: 'BDS Selection', course: 'Dental Surgeon (BDS)', tag: 'BDS' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section
        className="relative py-10 sm:py-14 overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-3 text-xs font-black uppercase tracking-widest rounded-full bg-white/20 text-white border border-white/30 backdrop-blur-md">
            Results • 11th &amp; 12th Medical
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
            NEET &amp; Medical Selections
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto mb-6">
            Congratulations to our doctors securing MBBS and BDS admissions in government and premier medical colleges.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
              <p className="text-2xl sm:text-3xl font-black text-white">7,000+</p>
              <p className="text-xs text-emerald-100 mt-1 font-semibold">Doctors Shaped</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
              <p className="text-2xl sm:text-3xl font-black text-amber-300">598</p>
              <p className="text-xs text-emerald-100 mt-1 font-semibold">Top NEET Score</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
              <p className="text-2xl sm:text-3xl font-black text-white">MBBS &amp; BDS</p>
              <p className="text-xs text-emerald-100 mt-1 font-semibold">Multiple Selections</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/15">
              <p className="text-2xl sm:text-3xl font-black text-emerald-200">NEET + NDA</p>
              <p className="text-xs text-emerald-100 mt-1 font-semibold">Dual Qualifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievers Grid */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Medical Champions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Our Medical Qualifiers
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-1">
            Achievers from Om Phoenix Learning Academy who qualified for MBBS &amp; BDS programs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {medicalAchievers.map((topper) => (
            <div
              key={topper.name}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col items-center text-center justify-between"
            >
              <div className="w-full flex justify-between items-center mb-2">
                <span className="text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider bg-emerald-600 text-white">
                  {topper.tag}
                </span>
                <Stethoscope className="w-4 h-4 text-emerald-600" />
              </div>

              {topper.image ? (
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md my-2">
                  <img src={topper.image} alt={topper.name} className="w-full h-full object-cover object-top" />
                </div>
              ) : (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black text-white my-2 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}
                >
                  {topper.name.charAt(0)}
                </div>
              )}

              <h3 className="text-base font-black text-slate-900 mt-1">{topper.name}</h3>
              <span className="mt-1 px-3 py-0.5 text-xs font-black rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {topper.score}
              </span>

              <p className="text-xs text-slate-500 mt-2">{topper.course}</p>

              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-between text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {topper.selection}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Aspire to be a Doctor?
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Join our dedicated NEET 11th - 12th Science batches with NCERT line-by-line master classes and weekly full-length mock tests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admission" className="btn-flame text-sm py-3 px-8">
              Enrol for NEET Coaching
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

export default Neet;
