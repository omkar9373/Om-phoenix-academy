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
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #581c87 0%, #9333ea 50%, #c084fc 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/20 text-white border border-white/30">
            Results
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Olympiad Results
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Our students excel in national and international olympiads, bringing home medals and
            honours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              { label: 'Olympiads Covered', value: '6+' },
              { label: 'Medals Won (2024)', value: '45+' },
              { label: 'NTSE Scholars', value: '18' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm text-purple-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Olympiad Types */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-5">
            Olympiads We Prepare For
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {olympiadTypes.map((o) => (
              <span
                key={o}
                className="px-4 py-2 rounded-full text-sm font-semibold border border-purple-200 text-purple-700 bg-purple-50"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
          Recent Achievements
        </h2>
        <p className="text-slate-500 text-center mb-10">
          Celebrating our Olympiad champions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div
              key={a.name}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold text-white mb-4"
                style={{ background: 'linear-gradient(135deg, #9333ea, #c084fc)' }}
              >
                {a.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{a.name}</h3>
              <span
                className="mt-2 px-3 py-0.5 text-sm font-semibold rounded-full text-white"
                style={{ background: '#9333ea' }}
              >
                {a.olympiad}
              </span>
              <p className="mt-2 text-sm font-semibold text-slate-600">{a.award}</p>
              <p className="text-xs text-slate-400 mt-1">{a.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Unlock your Olympiad potential!
          </h3>
          <p className="text-slate-500 mb-6">
            Dedicated olympiad batches with specialised study materials and mock tests.
          </p>
          <Link to="/admission" className="btn-primary">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Olympiads;
