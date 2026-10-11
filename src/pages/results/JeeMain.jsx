import { Link } from 'react-router-dom';

const JeeMain = () => {
  const toppers = [
    { name: 'Aditya Kumar', percentile: '99.8', year: '2024', session: 'Jan' },
    { name: 'Nisha Joshi', percentile: '99.6', year: '2024', session: 'Apr' },
    { name: 'Vikas Rao', percentile: '99.4', year: '2024', session: 'Jan' },
    { name: 'Pooja Sharma', percentile: '99.1', year: '2023', session: 'Apr' },
    { name: 'Manish Tiwari', percentile: '98.7', year: '2023', session: 'Jan' },
    { name: 'Ritu Agarwal', percentile: '98.4', year: '2023', session: 'Apr' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #c22f00 0%, #ff5700 50%, #ff803d 100%)',
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
            JEE Main Results
          </h1>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Exceptional JEE Main percentiles that reflect the hard work of our students and the
            quality of our teaching.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              { label: 'Qualifiers (2024)', value: '180+' },
              { label: 'Best Percentile', value: '99.8' },
              { label: '99+ Percentile', value: '24' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm text-orange-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Top Performers</h2>
        <p className="text-slate-500 text-center mb-10">
          Students who scored 98+ percentile in JEE Main
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((topper) => (
            <div
              key={topper.name}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold text-white mb-4"
                style={{ background: 'linear-gradient(135deg, #ff5700, #ff803d)' }}
              >
                {topper.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{topper.name}</h3>
              <span
                className="mt-2 px-3 py-0.5 text-sm font-semibold rounded-full text-white"
                style={{ background: '#ff5700' }}
              >
                {topper.percentile} %ile
              </span>
              <div className="mt-3 grid grid-cols-2 gap-2 w-full">
                <div className="bg-slate-50 rounded-lg p-2">
                  <p className="text-xs text-slate-400">Year</p>
                  <p className="text-sm font-semibold text-slate-700">{topper.year}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <p className="text-xs text-slate-400">Session</p>
                  <p className="text-sm font-semibold text-slate-700">{topper.session}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Join hundreds of JEE Main qualifiers!
          </h3>
          <p className="text-slate-500 mb-6">
            Our structured curriculum and expert mentors make the difference.
          </p>
          <Link to="/admission" className="btn-primary">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JeeMain;
