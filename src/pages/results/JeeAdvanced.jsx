import { Link } from 'react-router-dom';

const JeeAdvanced = () => {
  const toppers = [
    { name: 'Arjun Sharma', rank: 'AIR 42', year: '2024', score: '312/360' },
    { name: 'Priya Verma', rank: 'AIR 87', year: '2024', score: '298/360' },
    { name: 'Rahul Gupta', rank: 'AIR 134', year: '2024', score: '289/360' },
    { name: 'Sneha Patel', rank: 'AIR 201', year: '2023', score: '279/360' },
    { name: 'Karan Mehta', rank: 'AIR 256', year: '2023', score: '271/360' },
    { name: 'Divya Singh', rank: 'AIR 318', year: '2023', score: '264/360' },
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section
        className="relative py-0 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #004875 0%, #0082d6 50%, #36c5ff 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center py-6 sm:py-8">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/20 text-white border border-white/30">
            Results
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            JEE Advanced Results
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our students consistently achieve outstanding ranks in JEE Advanced, securing seats at
            IITs across India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              { label: 'Selections (2024)', value: '48+' },
              { label: 'Best AIR', value: '42' },
              { label: 'Under AIR 500', value: '12' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm text-blue-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Grid */}
      <section className="py-0 w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 mt-6 text-center">Our IIT Qualifiers</h2>
        <p className="text-slate-500 text-center mb-6">
          Proud achievers from Om Phoenix Learning Academy
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((topper) => (
            <div
              key={topper.name}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-[#0082d6]/15 hover:border-[#0082d6]/40 hover:-translate-y-1.5 transition-all duration-300 ease-out p-6 flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold text-white mb-4 group-hover:scale-105 transition-transform duration-300 ease-out shadow-xs"
                style={{ background: 'linear-gradient(135deg, #0082d6, #36c5ff)' }}
              >
                {topper.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{topper.name}</h3>
              <span
                className="mt-2 px-3 py-0.5 text-sm font-semibold rounded-full text-white"
                style={{ background: '#0082d6' }}
              >
                {topper.rank}
              </span>
              <div className="mt-3 grid grid-cols-2 gap-2 w-full">
                <div className="bg-slate-50 rounded-lg p-2">
                  <p className="text-xs text-slate-400">Year</p>
                  <p className="text-sm font-semibold text-slate-700">{topper.year}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <p className="text-xs text-slate-400">Score</p>
                  <p className="text-sm font-semibold text-slate-700">{topper.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-0 bg-white border-t border-slate-100">
        <div className="w-full text-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Be the next IIT qualifier from our academy!
          </h3>
          <p className="text-slate-500 mb-6">
            Enrol today and benefit from expert guidance, rigorous practice, and a proven track
            record.
          </p>
          <Link to="/admission" className="btn-flame">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JeeAdvanced;
