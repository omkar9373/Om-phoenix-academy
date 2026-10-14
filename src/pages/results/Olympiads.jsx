import { Link } from 'react-router-dom';

const Olympiads = () => {
  const achievements = [
    { name: 'Aryan Mishra', olympiad: 'NTSE', award: 'State Rank 3', year: '2024' },
    { name: 'Simran Kaur', olympiad: 'SOF IMO', award: 'International Rank 17', year: '2024' },
    { name: 'Harsh Gupta', olympiad: 'KVPY', award: 'SA Stream AIR 28', year: '2024' },
    { name: 'Tanvi Jain', olympiad: 'HOMI BHABHA', award: 'State Topper', year: '2023' },
    { name: 'Yash Soni', olympiad: 'SOF NSO', award: 'Gold Medal', year: '2023' },
    { name: 'Prachi Verma', olympiad: 'RMO', award: 'Merit Certificate', year: '2023' },
  ];

  const olympiadTypes = ['NTSE', 'KVPY', 'SOF IMO', 'SOF NSO', 'Homi Bhabha', 'RMO / IOQM'];

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section
        className="relative py-8 sm:py-10 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #071f38 0%, #0067ab 45%, #ff5e00 80%, #dc2626 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/20 text-white border border-white/30">
            Results
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
            Olympiad Results
          </h1>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
            Our students excel in national and international olympiads, bringing home medals and
            honours.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { label: 'Olympiads Covered', value: '6+' },
              { label: 'Medals Won (2024)', value: '45+' },
              { label: 'NTSE Scholars', value: '18' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-amber-200 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Olympiad Types */}
      <section className="py-4 sm:py-6 bg-white border-b border-slate-100">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5">
            Olympiads We Prepare For
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {olympiadTypes.map((o) => (
              <span
                key={o}
                className="px-4 py-2 rounded-full text-sm font-semibold border border-primary-200 text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors cursor-default"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-6 sm:py-8 w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 text-center">
          Recent Achievements
        </h2>
        <p className="text-slate-500 text-center mb-6">
          Celebrating our Olympiad champions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {achievements.map((a) => (
            <div
              key={a.name}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#0082d6]/15 hover:border-[#0082d6]/40 hover:-translate-y-1.5 transition-all duration-300 ease-out p-5 sm:p-6 flex flex-col items-center text-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-extrabold text-white mb-3 group-hover:scale-105 transition-transform duration-300 ease-out shadow-xs"
                style={{ background: 'linear-gradient(135deg, #0082d6, #36c5ff)' }}
              >
                {a.name.charAt(0)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">{a.name}</h3>
              <span
                className="mt-1.5 px-3 py-0.5 text-xs font-bold rounded-full text-white shadow-xs"
                style={{ background: 'linear-gradient(135deg, #ffb800, #ff5e00)' }}
              >
                {a.olympiad}
              </span>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">{a.award}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{a.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 sm:py-8 bg-white border-t border-slate-100">
        <div className="w-full text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Unlock your Olympiad potential!
          </h3>
          <p className="text-slate-500 mb-4">
            Dedicated olympiad batches with specialised study materials and mock tests.
          </p>
          <Link to="/admission" className="btn-flame text-sm py-3 px-8">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Olympiads;
