import { Link } from 'react-router-dom';

const Neet = () => {
  const toppers = [
    { name: 'Anjali Sharma', score: '710/720', rank: 'AIR 58', year: '2024' },
    { name: 'Rohit Dubey', score: '705/720', rank: 'AIR 112', year: '2024' },
    { name: 'Meera Yadav', score: '698/720', rank: 'AIR 193', year: '2024' },
    { name: 'Suresh Nair', score: '692/720', rank: 'AIR 264', year: '2023' },
    { name: 'Kavita Tripathi', score: '685/720', rank: 'AIR 347', year: '2023' },
    { name: 'Deepak Patel', score: '679/720', rank: 'AIR 428', year: '2023' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #14532d 0%, #16a34a 50%, #4ade80 100%)',
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
            NEET Results
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Our students achieve top NEET scores, securing seats in premier medical colleges across
            India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              { label: 'Selections (2024)', value: '120+' },
              { label: 'Best Score', value: '710' },
              { label: '650+ Scorers', value: '38' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="text-sm text-green-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">NEET Toppers</h2>
        <p className="text-slate-500 text-center mb-10">
          Students who secured the highest NEET scores
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((topper) => (
            <div
              key={topper.name}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold text-white mb-4"
                style={{ background: 'linear-gradient(135deg, #16a34a, #4ade80)' }}
              >
                {topper.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{topper.name}</h3>
              <span
                className="mt-2 px-3 py-0.5 text-sm font-semibold rounded-full text-white"
                style={{ background: '#16a34a' }}
              >
                {topper.rank}
              </span>
              <div className="mt-3 grid grid-cols-2 gap-2 w-full">
                <div className="bg-slate-50 rounded-lg p-2">
                  <p className="text-xs text-slate-400">Score</p>
                  <p className="text-sm font-semibold text-slate-700">{topper.score}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <p className="text-xs text-slate-400">Year</p>
                  <p className="text-sm font-semibold text-slate-700">{topper.year}</p>
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
            Your dream medical college awaits!
          </h3>
          <p className="text-slate-500 mb-6">
            Let us guide you to an outstanding NEET score with our specialised coaching.
          </p>
          <Link to="/admission" className="btn-primary">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Neet;
